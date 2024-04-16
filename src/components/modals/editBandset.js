import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editBandset, getBandsetById } from '@/redux/features/authSlice';
import Swal from 'sweetalert2';

const EditBandset = ({ closeModal, id ,}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    _id:'',
    bandsetName: '',
    bandsetPrice: '',
    bandsetImage: '',
    category: '',
    bntBookingPeriod :'',
    biddingDuedays:''
  });
  const  { _id ,bandsetName, bandsetPrice, bandsetImage, category, bntBookingPeriod, biddingDuedays } =data

  useEffect(() => {
    dispatch(getBandsetById(id)).then((val) => {
      console.log("valll,", val);
      setData(val?.payload?.data);
    });
  }, [dispatch, id]);

  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    const data = {_id, bandsetName, bandsetPrice, bandsetImage, category, bntBookingPeriod, biddingDuedays };
    console.log("aaadata",data);
    dispatch(editBandset(data)).then((val) => {
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
  };

    //onchange
    const onChange = ({ target }) => { 
      if (data && target?.value) {
        setData({ ...data, [target.name]: target.value });
      } 
    };

    console.log("rrr",data);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md mx-auto">
        <div className="px-6 py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetName">
                Bandset Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="bandsetName"
                defaultValue={data.bandsetName}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetPrice">
                Bandset Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="bandsetPrice"
                defaultValue={data.bandsetPrice}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bntBookingPeriod">
                Booking Period
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="bntBookingPeriod"
                defaultValue={data.bntBookingPeriod}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="biddingDuedays">
                Bidding Due Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="biddingDuedays"
                defaultValue={data.biddingDuedays}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandsetImage">
                Bandset Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                name="bandsetImage"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
              >
                <option value={data.category}>Select a category</option>
                <option value="elephant">Elephant</option>
                <option value="bandset">Bandset</option>
                <option value="thambolam">Thambolam</option>
                <option value="shinkarimelam">Shinkarimelam</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBandset;
