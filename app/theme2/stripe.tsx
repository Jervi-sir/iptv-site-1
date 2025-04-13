"use client";

import React, { useEffect, useState } from 'react';
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from '@/lib/convert-to-sub-currency';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export const StripeComponent = () => {
  const amount = 49.99;
  
  return (
    <>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </>
  );
};

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: {
      line1: "",
      city: "",
      state: "",
      postal_code: "",
      country: "US", // Default to US, adjust as needed
    },
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    phone: "",
    line1: "",
    city: "",
    state: "",
    postal_code: "",
  });

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const validateForm = () => {
    let isValid = true;
    const errors = {
      email: "",
      phone: "",
      line1: "",
      city: "",
      state: "",
      postal_code: "",
    };

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation (basic example, adjust regex as needed)
    if (!formData.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Address validation
    if (!formData.address.line1) {
      errors.line1 = "Address line 1 is required";
      isValid = false;
    }
    if (!formData.address.city) {
      errors.city = "City is required";
      isValid = false;
    }
    if (!formData.address.state) {
      errors.state = "State is required";
      isValid = false;
    }
    if (!formData.address.postal_code) {
      errors.postal_code = "Postal code is required";
      isValid = false;
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.address.postal_code)) {
      errors.postal_code = "Please enter a valid postal code";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Validate form
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
        payment_method_data: {
          billing_details: {
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
          },
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  const handleInputChange = (
    field: string,
    value: string,
    subField?: keyof typeof formData.address
  ) => {
    if (subField) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [subField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
    setFormErrors({ ...formErrors, [subField || field]: "" });
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md">
      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email (required)
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your email"
          required
        />
        {formErrors.email && <div className="text-red-500 text-sm mt-1">{formErrors.email}</div>}
      </div>

      {/* Phone Input */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number (required)
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your phone number"
          required
        />
        {formErrors.phone && <div className="text-red-500 text-sm mt-1">{formErrors.phone}</div>}
      </div>

      {/* Address Inputs */}
      <div className="mb-4">
        <label htmlFor="line1" className="block text-sm font-medium text-gray-700">
          Address Line 1 (required)
        </label>
        <input
          id="line1"
          type="text"
          value={formData.address.line1}
          onChange={(e) => handleInputChange("address", e.target.value, "line1")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Street address"
          required
        />
        {formErrors.line1 && <div className="text-red-500 text-sm mt-1">{formErrors.line1}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City (required)
        </label>
        <input
          id="city"
          type="text"
          value={formData.address.city}
          onChange={(e) => handleInputChange("address", e.target.value, "city")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="City"
          required
        />
        {formErrors.city && <div className="text-red-500 text-sm mt-1">{formErrors.city}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          State (required)
        </label>
        <input
          id="state"
          type="text"
          value={formData.address.state}
          onChange={(e) => handleInputChange("address", e.target.value, "state")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="State"
          required
        />
        {formErrors.state && <div className="text-red-500 text-sm mt-1">{formErrors.state}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
          Postal Code (required)
        </label>
        <input
          id="postal_code"
          type="text"
          value={formData.address.postal_code}
          onChange={(e) => handleInputChange("address", e.target.value, "postal_code")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Postal code"
          required
        />
        {formErrors.postal_code && (
          <div className="text-red-500 text-sm mt-1">{formErrors.postal_code}</div>
        )}
      </div>

      {clientSecret && (
        <PaymentElement
          options={{
            fields: {
              billingDetails: {
                email: 'never',
                phone: 'never',
                address: 'never', // Disable billing details in PaymentElement
              },
            },
          }}
        />
      )}

      {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-4 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};