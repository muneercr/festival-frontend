"use client"
import { getBandsetById, getBandsetList } from "@/redux/features/authSlice";
import { useEffect, useState } from "react";  
import { useDispatch } from "react-redux"; 
import BookBandset from "@/components/modals/bookBandset"
import Nav from "@/components/UserPage/nav"
import BidModal from "@/components/modals/bidModal"
import moment from 'moment' 

const Products = () => {
  const apiUrl = process.env.BASE_URL;

  
  console.log("BASE_URL",apiUrl);
  const dispatch = useDispatch();
  const [bandset, setBandset] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [sub,setSub] = useState(false)
  const [ModalData,setModalData] = useState([])
  const [date, setDate] = useState(); 
  const [loader,setLoader] = useState(false) 
  const [bookedData,setBookedData] = useState([])
  const [bidsModal,setBidsModal] = useState(false)
  const user =  JSON.parse(localStorage.getItem('user'));
  const today = new Date().toISOString().split('T')[1].split('.')[0];
  const  currentDateTime =moment().format('YYYY-MM-DD HH:mm:ss') 
  

  console.log("user",user);
  console.log("bookedData",today);
   
  useEffect(() => {
    
     dispatch(getBandsetList()).then((val) => {
    
      setBandset(val?.payload?.data)
     })
  }, [date,sub]);

 

  const addtoggleModal = () => {
    setShowModal(!showModal);
  };

  const biddingModal = (data) => {
    setBidsModal(!bidsModal);
    setModalData(data)
  };

  const bookProgram = (data) => {  
      setModalData(data) 
    
    addtoggleModal()
  }
  
console.log(bandset);  
  return (
   
    <div className=" min-h-screen gradient-bg-welcome">
      <Nav/>
       {showModal && <BookBandset
      closeModal={addtoggleModal}   
      ModalData={ModalData}
      setSub={setSub}
      date={date}/>
      }
      {
        bidsModal && <BidModal
        closeModal={biddingModal} 
        date={date}
        ModalData={ModalData}
        />

      }
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Book your bandset</h1>
        <div className="flex justify-center m-3">
        <input
         className="rounded"
         style={{ width: '200px',  
                  height: '50px' }}
         type="date"
         min={today}
         onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setDate(formattedDate);
  }}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bandset.map((product) => { 
          const booked =  product.bids.find(val=> val.start_date == `${date}T00:00:00.000Z`)  
                
            return(
            <div key={product._id}  
            className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div className={loader ? `h-full w-full` :"bg-gray-200 rounded-full dark:bg-gray-700"}>
                    <div className="relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB_3Wc1M3NrY10LneDZ3ZgxCucfRBB3MisQ&s" class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        {/* <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button> */}
                    </div>
                    <div className=" flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className="text-lg font-bold text-navy-700"> {product?.bandsetName} </p>
                            <p className="!mb-0 text-sm font-bold text-brand-500">PRICE : ₹ {product?.bandsetPrice} </p> 
                            <p className="text-xs">last bid :{booked?.biddingAmount}</p>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-fit md:items-center lg:justify-between ">
                        {booked && booked?.booking === "true"?
                          <button href="" className="linear w-full rounded-[20px] bg-rose-800  px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">BOOKED</button>
: 
<div className="w-full">
  <button 
    href="" 
    onClick={() => biddingModal(product)}
    className="linear w-full rounded-[20px] bg-blue-900  px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">
    bid
  </button>
  <p className="text-xs text-red m-2">End in 10d 2h 34min</p>
</div>    
// ?
 
// <button href="" className="linear w-full rounded-[20px] bg-green-500  px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700" 
//                            onClick={() =>{date && user ? bookProgram(product) : user ? alert("select date") : alert("please login")}}
//                            >avilable</button>
//                           //  <div className="m-2 text-red text-xs" >
//                           //   End in 10d 2h 34min
//                           //  </div> 
// :null
}
                      


                    </div>
                </div>
            </div> 
)})}
        </div>
      </div>
    </div>
  );
};

export default Products;
