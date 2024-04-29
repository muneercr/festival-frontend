import { bidPrograms } from '@/redux/features/authSlice';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'; 

const BidModal = ({ closeModal ,date,ModalData}) => {
  const dispatch = useDispatch();
  console.log("date",date);

  const handleSubmit = async (values) => {
    console.log("values",values);
    const id = ModalData._id
    try {
      const response = await dispatch(bidPrograms({values,id}));
      // if (response.payload.status === 200) {
      //   Swal.fire({
      //     position: "top-end",
      //     icon: "success",
      //     title: "Your work has been saved",
      //     showConfirmButton: false,
      //     timer: 1500
      //   });
      //   closeModal();
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //     footer: '<a href="#">Why do I have this issue?</a>'
      //   });
      // }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show an error message or handle error state
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md mx-auto">
        <div className="px-6 py-4">
          <Formik
            initialValues={{start_date : '', bidderName: '', biddingAmount: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.bidderName) {
                errors.bidderName = 'Required';
              }
              if (!values.start_date) {
                errors.start_date = 'Required';
              }
              if (!values.biddingAmount) {
                errors.biddingAmount = 'Required';
              } 
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, }) => (
              <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" encType="multipart/form-data">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetName">
                    Bidder Name
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="bidderName"
                    placeholder="Enter Bandset Name"
                  />
                  <ErrorMessage name="bidderName" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetName">
                    Date
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="start_date"
                    value={date} 
                    disabled
                  />
                  <ErrorMessage name="start_date" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetPrice">
                    Bidding Amount
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="biddingAmount"
                    placeholder="Enter  Price"
                  />
                  <ErrorMessage name="biddingAmount" component="div" className="text-red text-xs italic" />
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

export default BidModal;
