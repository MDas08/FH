import React from 'react'

const AgeCityCompany = (props: { data: any; handleChange: any; }) => {
    const { data, handleChange } = props

    return (
       
        <div className="w-full max-w-xl">
            <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                <div className="mb-4">
                    <label className="block text-gray-120 text-sm mb-2" htmlFor="Age">
                        Age
                    </label>
                    <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" 
                        id="Age" 
                        name="Age" 
                        type="number" 
                        placeholder="18"
                        onChange={handleChange} 
                        required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-120 text-sm mb-2" htmlFor="City">
                        City
                    </label>
                    <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" 
                        id="City"
                        name='City' 
                        type="text" 
                        placeholder="Delhi" 
                        onChange={handleChange}
                        required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-120 text-sm mb-2" htmlFor="Company">
                        Company
                    </label>
                    <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" 
                        id="Company" 
                        name='Company'
                        type="text" 
                        placeholder="Fix Health"
                        onChange={handleChange}/>
                </div>
            </form>
        </div>
        
    )
}

export default AgeCityCompany