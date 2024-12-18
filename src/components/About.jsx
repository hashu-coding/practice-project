import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"



function About() {

  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    console.log(data)
    setFormData(data)
    setIsLoading(false)
    try {
        const response = await axios.post("http://localhost:4000/api/insert", formData);
        console.log("Take response is here => : ", response);
        setIsLoading(true)
      } catch (error) {
        console.error("response is null ? ", error);
      }
    
  }



  return (
    <>
    <div onSubmit={handleSubmit(onSubmit)} className='w-full h-screen bg-gray-500 flex justify-center items-center'>
            <form className='p-8 bg-gray-400 rounded-lg border-none flex flex-col gap-4' action="">
                  <div className='w-full text-white'>
                    <label className='flex justify-between'> Id : <input {...register("id")} name='id' className='w-60 h-8 rounded-lg p-2 outline-none text-black' type="number" placeholder='Id'/></label>
                  </div>
                  <div className='w-full text-white'>
                    <label className='flex justify-between'> Name : <input  {...register("name")} name='name' className='w-60 h-8 rounded-lg p-2 outline-none text-black' type="text" placeholder='Name'/></label>
                  </div>
                  <div className='w-full text-white'>
                    <label className='flex justify-between'> Phone. : <input {...register("phone")} name='phone' className='w-60 h-8 rounded-lg p-2 outline-none text-black [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='Phone no.'/></label>
                  </div>
                  <div className='w-full text-white'>
                    <label className='flex justify-between'> City : <input {...register("city")} name='city' className='w-60 h-8 rounded-lg p-2 outline-none text-black' type="text" placeholder='city'/></label>
                  </div>
                  <div className='w-full text-white flex justify-center items-center'>
                          <button className='w-full py-2 bg-blue-300 rounded-md cursor-pointer' type="Submit" name='Submit'>{isLoading ? "Submit" : "Processing"}</button>
                  </div>

            </form>
    </div>
    </>

  )
}

export default About
