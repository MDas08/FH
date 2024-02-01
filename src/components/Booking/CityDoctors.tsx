import React, { useState, useEffect } from 'react';

interface Doctor {
  name: string;
  specialty: string;
}

interface CityDoctorsProps {
  data: { City: string };
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
}

const CityDoctors: React.FC<CityDoctorsProps> = ({ data, handleChange }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api-citydoctors.azurewebsites.net/doctor/${data.City}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setDoctors(result);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setDoctors([]);
        setLoading(false);
        setError('Error fetching data. Please try again later.');
      }
    };

    if (['Mumbai', 'Kolkata', 'Delhi', 'Ahmedabad', 'Bangalore', 'Chennai'].includes(data.City)) {
      fetchData();
    } else {
      setDoctors([]);
    }
  }, [data.City]);

  return (
    <>
      <div className="w-full max-w-xl bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">

        {loading ? (
          <p className='text-slate-50 rounded-lg bold-16 lg:regular-32 text-center'>Loading...</p>
        ) : error ? (
          <p className='text-slate-50 rounded-lg bold-16 lg:regular-32 text-center'>{error}</p>
        ) : (
          <div>
            <h2 className='text-slate-50 rounded-lg bold-16 lg:regular-32 text-center'>Doctors in {data.City}</h2>
            <ul className='text-gray-120 text-m my-5'>
              {doctors.map((doctor, index) => (
                <button className="bg-gray-110 text-gray-120 border border-transparent p-1 m-2 rounded-md w-full" key={index}>
                  <strong>{doctor.name}</strong> - {doctor.specialty}
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CityDoctors;
