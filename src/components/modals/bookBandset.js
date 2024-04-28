import { addBandset, bookPrograms, getBandset,  } from '@/redux/features/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const BookBandset = ({ closeModal,ModalData ,date,setSub}) => {
 
  const [pending,setPending] = useState(0)
  const dispatch = useDispatch(); 


  

    const handleSubmit = (values) => {
      // e.preventDefault();  
      const id = ModalData._id
      dispatch(bookPrograms({values,id})).then((val) => {
        // if(val?.payload?.status ==200){
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Your work has been saved",
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
        //   closeModal()
        // }
        // else{
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Something went wrong!",
        //     footer: '<a href="#">Why do I have this issue?</a>'
        //   });
        // } 
        console.log("val",val);
        setSub(true)
      })
      closeModal(); // Close modal after form submission
    };
    console.log("moda",ModalData);
  
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md mx-auto">
        <div className="px-6 py-4">
          <Formik
            initialValues={{ bookedDates:date, timeStarting: '', timeEnding: '', food: '',committeeName:'', biddingAmount: '', advance: '', pendingAmount:pending,  }}
            validate={(values) => {
              const errors = {};
              // Validation rules
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting,handleChange,values }) => (
              <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetName">
                      Bandset Name
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="bandsetName" 
                      value={ModalData.bandsetName}
                    />
                    <ErrorMessage name="bandsetName" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookedDates">
                      Booking date
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="bookedDates"
                      placeholder="Enter Booking Period"
                      value={date}
                      disabled
                    />
                    <ErrorMessage name="bookedDates" component="div" className="text-red text-xs italic" />
                  </div>
                </div>
                <div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetPrice">
                      Bandset Price
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="bandsetPrice" 
                      value={ModalData.bandsetPrice}

                    />
                    <ErrorMessage name="bandsetPrice" component="div" className="text-red text-xs italic" />
                  </div> 
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeStarting">
                      Starting time
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="time"
                      name="timeStarting"
                      placeholder="Enter Starting time"
                    />
                    <ErrorMessage name="timeStarting" component="div" className="text-red text-xs italic" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeEnding">
                      Ending time
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="time"
                      name="timeEnding"
                      placeholder="Enter Ending time"
                    />
                    <ErrorMessage name="timeEnding" component="div" className="text-red text-xs italic" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food">
                      Food
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="food"
                      placeholder="Enter Food"
                    />
                    <ErrorMessage name="food" component="div" className="text-red text-xs italic" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="agrimentAmount">
                      Agreement Amount
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="biddingAmount"
                      placeholder="Enter bidding or bargaining Amount"
                    />
                    <ErrorMessage name="biddingAmount" component="div" className="text-red text-xs italic" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="advance">
                      Advance
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="advance"
                      placeholder="Enter Advance" 
                      onChange={(e) => {
                        handleChange(e);
                        setPending(ModalData.bandsetPrice - e.target.value)
                      }} 
                    />
                    <ErrorMessage name="advance" component="div" className="text-red text-xs italic" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="advance">
                    committeeName
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="committeeName"
                      placeholder="Enter Advance" 
                       
                    />
                    <ErrorMessage name="committeeName" component="div" className="text-red text-xs italic" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pendingAmount">
                      Pending Amount
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="pendingAmount" 
                      value={pending}
                      disabled
                    />
                    <ErrorMessage name="pendingAmount" component="div" className="text-red text-xs italic" />
                  </div> 
                </div> 
                <div className="flex items-center justify-between col-span-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <button
                    className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => closeModal()}
                    disabled={isSubmitting}
                  >
                    Close
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    
    );
  };
  
  export default BookBandset;