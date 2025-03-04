'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      // Mock API submission (replace with actual API call)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "",  message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-orange-600">Contact Us</h1>
        <p className="text-center text-orange-400 mb-10">
          We did love to hear from you! Fill out the form below or reach out to us through email or social media.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-lg focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-lg focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
         
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-blue-300 rounded-md shadow-lg focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="mt-4 text-center text-green-600">Your message has been sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-600">Something went wrong. Please try again.</p>
        )}

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-orange-700">Contact Information</h2>
          <p className="text-gray-600 mt-4">Email: ba876943@gmail.com</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://x.com/basitali2405" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
              Twitter
            </a>
            <a href="https://www.facebook.com/basit256" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/basit-ali-baloch-738285253/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
             LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
