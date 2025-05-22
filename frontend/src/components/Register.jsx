import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"

const Register = () => {
    const [message, setmessage] = useState(" ");
    
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()
    
        const onSubmit = (data) => console.log(data)
    
        const handleGoogleSignIn = () => {
            
        }
    
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
                {/* m = margin
                x = horizontal axis (left and right)
                auto = automatically adjusts margin to center    the element horizontally */}
                <div className='w-full max-w-sm px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md'>
                    <h2 className='mb-4 text-xl font-semibold'>Please Register</h2>
    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            {/* In Tailwind CSS, block sets an element’s display property to display: block.
                    The element takes up the full width available. */}
                            <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor="email">Email</label>
                            {/* In Tailwind CSS, appearance-none removes the default styling applied by the browser to form elements like inputs, selects, and buttons. */}
                            {/* In Tailwind CSS, leading-tight controls line height, making text lines closer together than normal. */}
                            <input {...register("email", { required: true })} type="email" id='email' name='email' placeholder='Email Address' className='w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow' />
                        </div>
    
                        <div className='mb-4'>
                            {/* In Tailwind CSS, block sets an element’s display property to display: block.
                    The element takes up the full width available. */}
                            <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor="password">Password</label>
                            {/* In Tailwind CSS, appearance-none removes the default styling applied by the browser to form elements like inputs, selects, and buttons. */}
                            {/* In Tailwind CSS, leading-tight controls line height, making text lines closer together than normal. */}
                            <input {...register("password", { required: true })} type="password" id='password' name='password' placeholder='Password' className='w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow' />
                        </div>
                        {
                            message && <p className='mb-3 text-xs italic text-red-500'>{message}</p>
                        }
                        <div>
                            <button className='px-8 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:out-of-range:'>Register</button>
                        </div>
                    </form>
                    <p className='mt-4 text-sm font-medium align-baseline'>Have an account? Please <Link to='/register' className='text-blue-500 hover:text-blue-700'>Login</Link></p>
    
                    {/* google sign in */}
                    <div className='mt-4'>
                        <button 
                        onClick={handleGoogleSignIn}
                        className='flex flex-wrap items-center justify-center w-full gap-1 px-4 py-2 font-bold text-white rounded bg-secondary hover:bg-blue-700 focus:outline-none'>
                            <FaGoogle className='mr-2' />
                            Sign in with Google
                        </button>
                    </div>
                    <p className='mt-5 text-xs text-center text-gring-gray-500'>©2025 Book Store. All rights reserved.</p>
                </div>
            </div>
  )
}

export default Register
