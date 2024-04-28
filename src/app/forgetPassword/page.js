"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { userLogin } from '@/redux/features/authSlice';
import { useRouter } from 'next/navigation'


const ForgetPassword = () => {
    const dispatch = useDispatch()
  const router = useRouter()

    const handleSubmit = (values) => {
      dispatch(userLogin(values)).then((val) => {
        console.log("val",val);
        const message=val?.payload?.data?.message
        console.log("message",message);
        if(message == "loggin success"){
            console.log("log succs");
           localStorage.setItem("user",val?.payload?.data?.user)
           router.push("/product") 
        }
      })
    }
    return (
        <div className='gradient-bg-welcome'> 
           <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              forgot your account
            </h1>
            <Formik
              initialValues={{ email: '', }}
              validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'), 
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  handleSubmit(values)
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>  
                <button type="submit" className="w-full text-white bg-rose-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send</button>
                 
              </Form>
            </Formik>
          </div>
        </div>
      </div>
        </div>
    );
}

export default ForgetPassword;

