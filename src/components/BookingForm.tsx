'use client'
import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState({
    Name: "",
    Phone: "",
    Age: "",
    City: "",
    Company: "",
    Complaint: "",
    Experience: ""
  });

  // Update inputs value
  const handleParam = () => (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/5ea9cecb-2122-4667-80ea-7f14e55d2a2a", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ Name: "", Phone: "", Age: "", City: "", Company: "", Complaint: "", Experience: "" }));
  };
  return (
    <>
      <div className="w-full max-w-xl ">
        <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formSubmit}>
          <div className="mb-4">
            <label className="block text-gray-120 text-sm mb-2" htmlFor="Name">
              Name
            </label>
            <input className="bg-transparent shadow appearance-none border border-1px rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Name" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-120 text-sm mb-2" htmlFor="Phone">
              Phone No.
            </label>
            <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Phone" type="tel" placeholder="(+91) 12345-67890" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-120 text-sm mb-2" htmlFor="Age">
              Age
            </label>
            <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Age" type="number" placeholder="18" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-120 text-sm mb-2" htmlFor="City">
              City
            </label>
            <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="City" type="text" placeholder="Delhi" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-120 text-sm mb-2" htmlFor="Company">
              Company
            </label>
            <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Company" type="text" placeholder="Fix Health" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-120 text-sm mb-2" htmlFor="Complaint">
              What are your chief complaints?
            </label>
            <textarea className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Complaint" name="Complaint" required/>
          </div>
          <div className="mb-6">
          <label className="block text-gray-120 text-sm mb-2" htmlFor="Experience">
              Do you have any previous experience with physiotherapy?
            </label>
            <textarea className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Experience" name="Experience"/>
          </div>
          
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-120 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          Please note due to API Rate Limiting only one response per minute is allowed </p>
      </div>
    </>

  );
}