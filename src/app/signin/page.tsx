"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [submittedData, setSubmittedData] = useState<{ email: string; password: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save email and password
    const userData = { email, password };
    setSubmittedData(userData);

    // Clear the form inputs
    setEmail("");
    setPassword("");

    alert("Sign-In Successful!");
    console.log("Submitted Data:", userData);
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-200 focus:ring focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle input type based on state
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-200 focus:ring focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Show/Hide Password Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Display Submitted Data */}
        {submittedData && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
            <h2 className="text-lg font-semibold">Submitted Data:</h2>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Password:</strong> {"*".repeat(submittedData.password.length)}
            </p>
          </div>
        )}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignIn;
