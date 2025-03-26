import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import p4 from "../assets/images/p4.jpg";
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";
import {
  PuzzlePieceIcon,
  UserCircleIcon,
  BuildingOffice2Icon,
  GiftIcon,
  ShoppingCartIcon,
  BeakerIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { LiaPage4 } from "react-icons/lia";

// function MyComponent() {
//   return (
//     <div>
//       <BeakerIcon className="size-6 text-blue-500" />
//       <p>...</p>
//     </div>
//   )
// }

function Landing() {
  return (
    <div>
      <div className="">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-screen text-lg font-semibold  bg-[url(assets/images/hero-bg.jpg)] bg-cover bg-blend-lighten">
          
         <div>
         <p className="mb-4 font-extrabold text-[50px] text-[#5F8B4C] ml-[60px]">
            Discover great places in New York
          </p>
         </div>
          <p  className="mb-4 text-white font-extrabold">
           Let's uncover best to eat,drink and shop nearest to you.
          </p>
          <div className="flex flex-row justify-center items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-2 border-white bg-[#945034] text-white m-1 p-2 rounded-lg font-extrabold  "
            />
            <input
              type="text"
              placeholder="New York City"
              className="border-2 border-white bg-[#945034] text-white m-1 p-2 rounded-lg font-extrabold"
            />
            <button className="bg-[#FFDDAB] m-1 px-10 py-3 text-[#945034] cursor-pointer rounded-lg">
              Search
            </button>
          </div>
          <div className="flex flex-row text-text-[#18230F] p-4 font-bold ">
            <a className="m-3" href="">
              Browse Popular
            </a>
            <span className="m-3 text-[#945034]">or</span>
            <a className="m-3 text-[#18230F]" href="">
              Recently Added
            </a>
          </div>
        </div>
      </div>

      <section className="h-screen bg-[#FFDDAB]">
        <div className="flex flex-col justify-center items-center h-[100px]">
          <h2 className="p-2 text-[30px]">What do you need to find?</h2>
          <div className="border w-[5%] text-rose-400"></div>
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="w-60 h-80 flex flex-row gap-2 mt-20 cursor-pointer">
            <img src={p4} alt="" className="" />
            <img src={food2} alt="" />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-blue-400">Delicious Meal</span>
            
            <span className="text-[30px]">We Offer Luxurious Place of Rest and <br />Delicious Meals</span>
            
            <span>Do you seek for a place where you can can break the eyes?<br />Where you can relax and bounce back to the noisy world again?<br />Look for no other place than Yorkings where we provide<br /> Well furnished rooms and event center and serve the best meal ever! </span>
          </div>
        </div>

   
      </section>

      <section className="h-[100vh] bg-gray-100 mb-20">
        <div className="flex flex-col justify-center items-center h-[100px]">
          <h2 className="p-2 text-[30px] mt-10">Featured</h2>
          <div className="border w-[5%] text-rose-400 mt-2"></div>
        </div>

        <div className="flex flex-row justify-center items-center w-[90px] m-auto ">
          <div className="flex flex-col">
            <div className="relative ">
              <div className="absolute right-2 -top-3 text-sm font-bold rounded-full bg-amber-400 py-2 px-3 text-white hover:scale-105 hover:bg-rose-500">
                6.5
              </div>
              <img
                src={food1}
                alt=""
                className="w-full h-full rounded-lg hover:scale-105"
              />
            </div>
            <div className="bg-white">
              <h3>Burger & Lobster</h3>
              <div className="flex flex-row text-[12px]  text-gray-500">
                <p>Restaurant</p>
                <p>.</p>
                <p>3 Reviews</p>
                <p>.</p>
                <p>$$$$$</p>
              </div>
             
             <p className="text-[12px]  text-gray-500 font-mono">1301 Avenue,Brooklyn, NY 11230</p>
             <p className="text-[12px]  text-gray-500 font-mono">+44 20 7336 8898</p>
             <p className="text-[12px]  text-gray-500 font-mono">https:burgerandlobster.com</p>

             <div className="flex flex-row justify-between">
              <button className="text-[12px] text-rose-500">CLOSED NOW</button>
              <p className="text-[12px]">❤️</p>
            </div>
             
            </div>
            
          </div>

          <div className="flex flex-col m-4">
            <div className="relative">
              <img src={food2} alt="" className="w-full h-auto rounded-lg" />
              <div className=" absolute -top-3 text-sm font-bold right-2 rounded-full bg-green-500 py-2 px-3 text-white  ">
                9.5
              </div>
            </div>
            <div className="bg-white">
              <h3>Burger & Lobster</h3>
              <div className="flex flex-row text-[12px]  text-gray-500 ">
                <p>Restaurant</p>
                <p>.</p>
                <p>3 Reviews</p>
                <p>.</p>
                <p>$$$$$</p>
              </div>
              <p className="text-[12px]  text-gray-500 font-mono">1301 Avenue,Brooklyn, NY 11230</p>
              <p className="text-[12px]  text-gray-500 font-mono">+44 20 7336 8898</p>
              <p className="text-[12px]  text-gray-500 font-mono">https:burgerandlobster.com</p>

              <div className="flex flex-row justify-between">
              <button className="text-[12px] text-rose-500">CLOSED NOW</button>
              <p className="text-[12px]">❤️</p>
            </div>
            </div>
            
          </div>

          <div className="flex flex-col">
            <div className="relative">
              <div className=" absolute -top-3 text-sm font-bold right-2 rounded-full bg-rose-400 py-2 px-3 text-white">
                3.2
              </div>
              <img src={food3} alt="" className="w-full h-auto rounded-lg"/>
            </div>
            <div className="bg-white">
              <h3>Burger & Lobster</h3>
              <div className="flex flex-row text-[12px]  text-gray-500">
                <p>Restaurant</p>
                <p>.</p>
                <p>3 Reviews</p>
                <p>.</p>
                <p>$$$$$</p>
              </div>
              <p className="text-[12px] text-gray-500 font-mono">1301 Avenue,Brooklyn, NY 11230</p>
              <p className="text-[12px]  text-gray-500 font-mono">+44 20 7336 8898</p>
              <p className="text-[12px]  text-gray-500 font-mono">https:burgerandlobster.com</p>

              <div className="flex flex-row justify-between">
              <button className="text-[12px] text-rose-500">CLOSED NOW</button>
              <p className="text-[12px]">❤️</p>
            </div>
            </div>
           
          </div>
        </div>

        <button className="bg-[#FF9A9A] py-2 px-6 rounded-lg ml-160 mt-20 cursor-pointer">View All</button>

      
      </section>

      <section className="h-[70vh]">
        
        <div className="flex flex-col justify-center items-center">
          <h2 className="p-2 text-[30px]">Browse Categories</h2>
          <div className="border w-[5%] text-rose-400"></div>
        </div>
        <div className="bg-[#945034]">
        <div className="grid grid-cols-4 grid-rows-2 gap-6 p-6 w-[70%] m-auto">
          <div className="border-1  border-bg-white text-[#18230F]  hover:bg-[#5F8B4C] hover:text-white h-30 w-50 flex flex-col justify-center items-center">
            <PuzzlePieceIcon className="size-15 text-rose-400" />
            <p>Automative</p>
          </div>

          <div className="border-1  border-bg-text-[#18230F]  hover:bg-[#5F8B4C] hover:text-white h-30 w-50 flex flex-col justify-center items-center">
            <UserCircleIcon className="size-15 text-rose-400" />
            <p>Beauty & Spa</p>
          </div>

          <div className="border-1  border-bg-text-[#18230F]  hover:bg-[#5F8B4C] hover:text-white h-30 w-50 flex flex-col justify-center items-center">
            <BuildingOffice2Icon className="size-15 text-rose-400" />
            <p>Hotel</p>
          </div>

          <div className="border-1  border-bg-text-[#18230F]  hover:bg-[#5F8B4C] hover:text-white h-30 w-50 flex flex-col justify-center items-center">
            <GiftIcon className="size-15 text-rose-400" />
            <p>Restaurant</p>
          </div>

          <div className="border-1 border-bg-text-[#18230F] hover:bg-[#5F8B4C] hover:text-white h-30 w-50 flex flex-col justify-center items-center">
            <ShoppingCartIcon className="size-15 text-rose-400" />
            <p>Shopping</p>
          </div>

          <div className="border-1  border-bg-text-[#18230F]  hover:bg-[#5F8B4C] hover:text-white h-30 w-50 flex flex-col justify-center items-center">
            <BeakerIcon className="size-15 text-rose-400" />
            <p>Coffee</p>
          </div>

          <div className="border-1  border-bg-text-[#18230F]  hover:bg-[#5F8B4C] hover:text-white h-30 w-50 flex flex-col justify-center items-center">
            <PresentationChartLineIcon className="size-15 text-red-400" />
            <p>Club & Bar</p>
          </div>

          <div className="border-1  border-bg-text-[#18230F] hover:bg-[#5F8B4C] hover:text-white scale-[105px] h-30 w-50 flex flex-col justify-center items-center">
            <RocketLaunchIcon className="size-15 text-rose-400" />
            <p>Destination</p>
          </div>
        </div>
        </div>
      </section>

      <section className="h-50 bg-[#FFDDAB]">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[30px]">Reach millions of People</span>

          <span className="text-white font-bold">
            Add your Business infront of millions and earn profits from our
            listing
          </span>
          <button className="bg-[#FF9A9A] m-8 p-2 rounded-2xl font-[30px]">
            + Add Listing
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
