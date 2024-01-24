'use client'
import React from 'react'

const NamePhone = (props: { data: any; handleChange: any; }) => {
    const { data, handleChange } = props
    return (
        
        <div className="w-full max-w-xl">
            <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-120 text-sm mb-2" htmlFor="Name">
                        Name
                    </label>
                    <input 
                        className="bg-transparent shadow appearance-none border border-1px rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" 
                        id="Name"
                        name="Name" 
                        type="text" 
                        placeholder="Name"
                        onChange={handleChange}
                        required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-120 text-sm mb-2" htmlFor="Phone">
                        Phone No.
                    </label>
                    <input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" 
                        id="Phone"
                        name="Phone" 
                        type="tel" 
                        placeholder="(+91) 12345-67890" 
                        onChange={handleChange}
                        required/>
                </div>
            </form>
        </div>
        
    )
}

export default NamePhone