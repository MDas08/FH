'use client'
import React, { useState, ChangeEvent } from 'react';
import AgeCityCompany from './AgeCityCompany';
import Complaint from './Complaint';
import NamePhone from './NamePhone';
import Button from '../Button';

interface FormData {
  Name: string;
  Phone: string;
  Age: string;
  City: string;
  Company: string;
  Complaint: string;
  Experience: string;
}

const MainForm: React.FC = () => {
    const [data, setData] = useState<FormData>({
      Name: '',
      Phone: '',
      Age: '',
      City: '',
      Company: '',
      Complaint: '',
      Experience: '',
    });
  
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value,
      });
    };
  
    const [activeTab, setActiveTab] = useState(0);
    const [submitted, setSubmitted] = useState(false);
  
    const formElements = [
      <NamePhone data={data} handleChange={handleChange} />,
      <AgeCityCompany data={data} handleChange={handleChange} />,
      <Complaint data={data} handleChange={handleChange} />,
    ];
  
    const handleNextClick = () => {
      
      setActiveTab((prev) => prev + 1);
    };

    const handleBackClick = () => {
      
      setActiveTab((prev) => prev - 1);
    };
  
    const handleFormSubmit = () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(formData)
      //fetch("https://getform.io/f/5ea9cecb-2122-4667-80ea-7f14e55d2a2a"
      //https://formcarry.com/s/tNTtHwuOccs
      fetch("https://formcarry.com/s/tNTtHwuOccs", {
        method: "POST",
        body: formData
      }).then(() => {
        setSubmitted(true);
        
        setData({
          Name: '',
          Phone: '',
          Age: '',
          City: '',
          Company: '',
          Complaint: '',
          Experience: '',
        });
      });
    };
  
    return (
      <div className='flex flex-col w-1/2 h-auto justify-between items-center my-11'>
        {/* <form className='w-full max-w-xl'> */}
          <h1 className='text-slate-50 rounded-lg bold-16 lg:bold-32 text-center'>Book your appointment here!</h1>
          <div className='w-full max-w-xl'>{formElements[activeTab]}</div>
          <div className='flex flex-wrap gap-x-6 mx-auto'>
            <button
              disabled={activeTab === 0 ? true : false}
              onClick={handleBackClick}
              className={`px-4 py-2 rounded-xl bg-teal-20 text-white ${
                activeTab === 0 ? 'opacity-50 bg-slate-600' : 'opacity-100'
              }`}
              type='button'
            >
              Back
            </button>
            <button
              disabled={activeTab === formElements.length - 1 ? true : false}
              onClick={handleNextClick}
              className={`px-4 py-2 rounded-xl bg-teal-20 text-white ${
                activeTab === formElements.length - 1 ? 'opacity-50 bg-slate-600' : 'opacity-100'
              }`}
              type="button" 
            >
              Next
            </button>
            {activeTab === formElements.length - 1 ? (
              <button
                onClick={handleFormSubmit}
                className='px-4 py-2 rounded-xl bg-teal-20 text-white'
                type="button"
              >
                Submit
              </button>
            ) : null}
          </div>
          {submitted && (
            <div className="mt-4 text-green-600">
              Form submitted successfully!
            </div>
          )}
        {/* </form> */}
      </div>
    );
  };
  
  export default MainForm;
  