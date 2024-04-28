"use client"
import { getBandsetById, getBandsetList } from "@/redux/features/authSlice";
import { useEffect, useState } from "react";  
import { useDispatch } from "react-redux"; 
import BookBandset from "@/components/modals/bookBandset"


<<<<<<< HEAD
const Products = () => { 

=======
const Products = () => {
>>>>>>> d5bad8e5f8a04c58e4eacc3b3f39f6bc29a59d7c
  const dispatch = useDispatch();

  const [bandset, setBandset] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [sub,setSub] = useState(false)
  const [ModalData,setModalData] = useState([])
  const [date, setDate] = useState(); 
  const [loader,setLoader] = useState(false)
  console.log("sub",sub);
   
  useEffect(() => {
    
     dispatch(getBandsetList()).then((val) => {
    
      setBandset(val?.payload?.data)
     })
  }, [date,sub]);

  console.log("showModal",showModal);

  const addtoggleModal = () => {
    setShowModal(!showModal);
  };

  const bookProgram = (id) => { 
    dispatch(getBandsetById(id)).then((val) => {
      setModalData(val?.payload?.data)
    })
    
    addtoggleModal()
  }
  
console.log(bandset);
  return (
   
    <div className=" min-h-screen">
       {showModal && <BookBandset
      closeModal={addtoggleModal}   
      ModalData={ModalData}
      setSub={setSub}
      date={date}/>
      }
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Shop Our Products</h1>
        <input type="date"  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setDate(formattedDate);
  }}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bandset.map((product) => { 
          const booked =  product.bookings.find((val) => 
               val.start_date == `${date}T00:00:00.000Z`)  
               console.log("booked",booked);
            return(
            <div key={product} className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div className={loader ? `h-full w-full` :"bg-gray-200 rounded-full dark:bg-gray-700"}>
                    <div className="relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB_3Wc1M3NrY10LneDZ3ZgxCucfRBB3MisQ&s" class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        {/* <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button> */}
                    </div>
                    <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div class="mb-2">
                            <p class="text-lg font-bold text-navy-700"> {product?.bandsetName} </p>
                            <p class="!mb-0 text-sm font-bold text-brand-500">PRICE : ₹ {product?.bandsetPrice} </p>
                            {/* <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Esthera Jackson </p> */}
                        </div>
                        <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                            {/* <span class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png" alt=""/>
                            </span>
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png" alt=""/>
                            </span> */}
                            <span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                              {booked?.committeeName}
                                {/* <img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png" alt=""/> */}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-fit md:items-center lg:justify-between ">
                        {booked?
                          <button href="" class="linear w-full rounded-[20px] bg-rose-800  px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">BOOKED</button>
:                         <button href="" class="linear w-full rounded-[20px] bg-green-500  px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700" 
                           onClick={() =>bookProgram(product._id)}
                           >avilable</button>

                      
                          }
                      
                      {/* <div>
    <label for="hs-trailing-button-add-on" class="sr-only">Label</label> 
<div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
  <button
    class="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Invite
  </button>
  <input
    type="email"
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" "
    required
  />
  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Email Address
  </label>
</div> 
  
  </div> */}

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
