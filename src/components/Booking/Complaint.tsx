import React from 'react'

const Complaint = (props: { data: any; handleChange: any; }) => {
    const { data, handleChange } = props

    return (
        <>
            <div className="w-full max-w-xl">
                <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-120 text-sm mb-2" htmlFor="Complaint">
                            What are your chief complaints?
                        </label>
                        <textarea className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Complaint" name="Complaint" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-120 text-sm mb-2" htmlFor="Experience">
                            Do you have any previous experience with physiotherapy?
                        </label>
                        <textarea className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-120 leading-tight focus:outline-none focus:shadow-outline" id="Experience" name="Experience" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Complaint