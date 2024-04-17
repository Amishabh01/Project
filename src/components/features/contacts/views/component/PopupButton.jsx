// src/components/features/contacts/views/component/PopupButton.jsx
import React, { useState } from 'react'
import ContactForm from './ContactForm'

const PopupButton = () => {
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div>
            {showPopup && (
                <div className="fixed z-10 inset-0 overflow-y-auto"
                    onClick={togglePopup} data-testid="background-overlay"
                >
                    <div className="flex items-center justify-center min-h-screen">
                        <div
                            className="bg-white rounded-lg shadow-lg p-8"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                            data-testid="popup"
                        >
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
                                    aria-label="Close"
                                    onClick={togglePopup}
                                    data-testid="close-button"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-4" data-testid="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='flexjustify-center bg-gray-100 shadow-lg shadow-black-500/50'>
                <div className=" flex justify-center text-center space-x-2 ">
                    <h1 className="text-xl font-semibold mb-4 mt-5">
                        To get in touch with us, simply click on the "Contact Us" button and
                        fill out the form
                    </h1>
                </div>
                <div className="flex justify-center space-x-4">

                    <button
                        type="button"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                        onClick={togglePopup}
                        data-testid="popup-button"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopupButton
