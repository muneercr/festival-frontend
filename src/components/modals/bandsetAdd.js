import { addBandset, getBandset,  } from '@/redux/features/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const AddBandset = ({ closeModal }) => {

  const dispatch = useDispatch();



    const handleSubmit = (values) => {
      // e.preventDefault(); 
      console.log(values);
      dispatch(addBandset(values)).then((val) => {
        if(val?.payload?.status ==200){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          closeModal()
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        } 
      })
      // closeModal(); // Close modal after form submission
    };
  
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md mx-auto">
          <div className="px-6 py-4">
            <Formik
              initialValues={{ bandsetName: '', bandsetPrice: '', bandsetImage: '', category: '',bntBookingPeriod :'',biddingDuedays:'' }}
              validate={(values) => {
                const errors = {};
                if (!values.bandsetName) {
                  errors.bandsetName = 'Required';
                }
                if (!values.bandsetPrice) {
                  errors.bandsetPrice = 'Required';
                }
                if (!values.bandsetImage) {
                  errors.bandsetImage = 'Required';
                }
                if (!values.category) {
                  errors.category = 'Required';
                }
                if (!values.bntBookingPeriod) {
                  errors.bntBookingPeriod = 'Required';
                }
                if (!values.biddingDuedays) {
                  errors.biddingDuedays = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  handleSubmit(values)
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetName">
                      Bandset Name
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="bandsetName"
                      placeholder="Enter Bandset Name"
                    />
                    <ErrorMessage name="bandsetName" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetPrice">
                      Bandset Price
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="bandsetPrice"
                      placeholder="Enter Bandset Price"
                    />
                    <ErrorMessage name="bandsetPrice" component="div" className="text-red text-xs italic" />
                  </div>
                  <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetName">
                    Booking Period
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="bntBookingPeriod"
                    placeholder="Enter Booking Period"
                  />
                  <ErrorMessage name="Booking Period" component="div" className="text-red text-xs italic" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetPrice">
                    Bidding Due date
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="biddingDuedays"
                    placeholder="Enter Bidding Due date"
                  />
                  <ErrorMessage name="Bidding Due date" component="div" className="text-red text-xs italic" />
                </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetImage">
                      Bandset Image
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="file"
                      name="bandsetImage"
                    />
                    <ErrorMessage name="bandsetImage" component="div" className="text-red text-xs italic" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                      Category
                    </label>
                    <Field
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      component="select"
                      name="category"
                    >
                      <option value="">Select a category</option>
                      <option value="elephant">elephant</option> 
                      <option value="bandset">bandset</option>
                      <option value="thambolam">thambolam</option>
                      <option value="shinkarimelam">shinkarimelam</option>

                      {/* Add more options as needed */}
                    </Field>
                    <ErrorMessage name="category" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                    <button
                      className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
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
  
  export default AddBandset;