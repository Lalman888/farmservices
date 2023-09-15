"use client";
import React from 'react'

function Contactform() {
  async function handlesubmit(event: any) {
    event.preventDefault();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
const response =await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });
        
        if (response.ok) {
          alert("Message Sent");
        } else {
          alert("Error Sending Message");
        }
  }
  return (
    <form action="submit" onSubmit={handlesubmit}>
      <div className="w-full flex flex-col my-4">
        <label className="dont-bold text-gray-800" htmlFor="name">
          Name
        </label>
        <input
          className="p-4 bg-gray-50 border border-gray-100"
          type="text"
          autoComplete="off"
          id="name"
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <label className="dont-bold text-gray-800" htmlFor="email">
          Email
        </label>
        <input
          className="p-4 bg-gray-50 border border-gray-100"
          type="text"
          required
          autoComplete="off"
          id="email"
        />
      </div>
      <label htmlFor="message" className="font-bold text-gray-800 ">
        Your Message
      </label>
      <textarea
        rows={4}
        name="message"
        placeholder="How can we help you?"
        className="w-full bg-gray-50 "
        required
        minLength={10}
        maxLength={500}
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 w-24 bg-emerald-500/75 text-white font-medium rounded-md "
      >
        Submit
      </button>
    </form>
  );
}

export default Contactform