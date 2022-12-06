import React from 'react'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams, Link } from 'react-router-dom';

const index = () => {
    const login = () => {
        toast.success('Successfully Login!');
    }





    return (
        <>
            <section className="h-full gradient-form bg-gray-200 md:h-screen">
                <div className="container py-12 px-6 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6">
                                            <div className="text-center">
                                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Iniciar Session</h4>
                                            </div>
                                            <form>
                                                <p className="mb-4">Please login to your account</p>
                                                <div className="mb-4">
                                                    <label className='text-black'>Email</label>
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Username"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className='text-black'>Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div className="text-center pt-1 mb-12 pb-1">
                                                    <Toaster />
                                                    <Link
                                                        onClick={login}
                                                        className="bg-[#0156FF] inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        to='/'
                                                    >
                                                        Ingresar
                                                    </Link>

                                                    <a className="text-gray-500" href="#!">Olvidaste Tu contraseña?</a>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                        <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <h4 className="text-xl font-semibold mb-6 text-black">Los datos de son</h4>
                                            <p className="text-sm text-black">
                                                Email:
                                            </p>
                                            <p className="text-sm text-black">
                                                Password:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default index