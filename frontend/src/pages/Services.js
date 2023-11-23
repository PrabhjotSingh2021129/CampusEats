// import React from "react";

// const serviceLists = [
//     {id:1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "../asset/icon1.png"},
//     {id:2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "../asset/icon2.png"},
//     {id:3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "../asset/icon3.png"},
//     {id:4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "../asset/icon4.png"},
// ]

// const OurServices = () => {
//   return (
//     <div className="section-container my-16">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//         <div className="md:w-1/2">
//           <div className="text-left md:w-4/5">
//             <p className="subtitle">Our Story & Services</p>
//             <h2 className="title">Our Culinary Journey And Services</h2>
//             <p className="my-5 text-secondary leading-[30px]">
//               Rooted in passion, we curate unforgettable dining experiences and
//               offer exceptional services, blending culinary artistry with warm
//               hospitality.
//             </p>

//             <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
//               Explore
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//             <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
//                 {
//                     serviceLists.map((service) => (
//                         <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
//                             <img src={service.img} alt="" className=" mx-auto"/>
//                             <h5 className="pt-3 font-semibold"> {service.title}</h5>
//                             <p className="text-[#90BD95]">{service.des}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;

// import React from "react";

// const serviceLists = [
//   { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "../asset/icon1.png" },
//   { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "../asset/icon2.png" },
//   { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "../asset/icon3.png" },
//   { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "../asset/icon4.png" },
// ];

// const OurServices = () => {
//   return (
//     <div className="section-container my-16">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//         <div className="md:w-1/2">
//           <div className="text-left md:w-4/5">
//             <p className="subtitle">Our Story & Services</p>
//             <h2 className="title">Our Culinary Journey And Services</h2>
//             <p className="my-5 text-secondary" style={{ lineHeight: '30px' }}>
//               Rooted in passion, we curate unforgettable dining experiences and
//               offer exceptional services, blending culinary artistry with warm
//               hospitality.
//             </p>

//             <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
//               Explore
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
//             {serviceLists.map((service) => (
//               <div
//                 key={service.id}
//                 className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200"
//               >
//                 <img src={service.img} alt="" className="mx-auto" style={{ maxWidth: '100%' }} />
//                 <h5 className="pt-3 font-semibold">{service.title}</h5>
//                 <p className="text-[#90BD95]">{service.des}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;

// import React from "react";

// const serviceLists = [
//   { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "/asset/icon1.png" },
//   { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "/asset/icon2.png" },
//   { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "/asset/icon3.png" },
//   { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "/asset/icon4.png" },
// ];

// const OurServices = () => {
//   return (
//     <div className="section-container my-16">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//         <div className="md:w-1/2">
//           <div className="text-left md:w-4/5">
//             <p className="subtitle text-blue-500">Our Story & Services</p>
//             <h2 className="title text-3xl font-bold text-gray-800">Our Culinary Journey And Services</h2>
//             <p className="my-5 text-secondary" style={{ lineHeight: '30px', color: '#575757' }}>
//               Rooted in passion, we curate unforgettable dining experiences and
//               offer exceptional services, blending culinary artistry with warm
//               hospitality.
//             </p>

//             <button className="bg-green-500 hover:bg-green-600 text-white font-semibold btn px-8 py-3 rounded-full">
//               Explore
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
//             {serviceLists.map((service) => (
//               <div
//                 key={service.id}
//                 className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200"
//               >
//                 <img src={service.img} alt={service.title} className="mx-auto" style={{ maxWidth: '100%' }} />
//                 <h5 className="pt-3 font-semibold text-lg text-gray-800">{service.title}</h5>
//                 <p className="text-[#90BD95]">{service.des}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;

// import React from "react";

// const serviceLists = [
//   { id: 1, title: "Catering", des: "Delight your guests with our flavors and presentation", img: "../asset/icon1.png" },
//   { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "../asset/icon2.png" },
//   { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "../asset/icon3.png" },
//   { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "../asset/icon4.png" },
// ];

// const Services = () => {
//   return (
//     <div className="p-2 md:p-4 bg-gray-100">
//       <div className="section-container my-16 bg-white rounded-lg shadow-md p-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           <div className="md:w-1/2">
//             <div className="text-left md:w-4/5">
//             <p style={{ color: 'red', textTransform: 'uppercase', letterSpacing: 'wide', fontWeight: 'bold', fontSize: '1.25rem' }}>Our Story & Services</p>
// <h2 style={{ fontSize: '2.5rem', lineHeight: '1.4', fontWeight: 'bold', margin: '1rem 0' }}>Our Culinary Journey And Services</h2>

//               <p className="my-5 text-secondary leading-[30px]">
//                 Rooted in passion, we curate unforgettable dining experiences and
//                 offer exceptional services, blending culinary artistry with warm
//                 hospitality.
//               </p>

//               <button className="bg-green-500 font-semibold text-white px-8 py-3 rounded-full">
//                 Explore
//               </button>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
//               {serviceLists.map((service) => (
//                 <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
//                   <img src={service.img} alt="" className="mx-auto h-20" />
//                   <h5 className="pt-3 font-semibold">{service.title}</h5>
//                   <p className="text-[#90BD95]">{service.des}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import icon1 from "../asset/icon1.png"
import icon2 from "../asset/icon2.png"
import icon3 from "../asset/icon3.png"
import icon4 from "../asset/icon4.png"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTruck,
  faShoppingBasket,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and presentation",
    img: icon1,
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    img: icon2,
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering n",
    img: icon3,
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    img: icon4,
  },
];

const Services = () => {
  return (
    <div className="p-2 md:p-4 bg-gradient-to-r from-blue-200 to-white">
      <div className="section-container my-16 bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="text-left md:w-4/5">
              <p className="text-4xl md:text-5xl font-bold py-3">
                Our Story & Services
              </p>
              <h2 className="text-4xl md:text-4xl font-bold py-3 text-red-600">
                Our Culinary Journey And Services
              </h2>

              <p className="my-5 text-secondary leading-[30px] text-sky-950">
                Rooted in passion, we curate unforgettable dining experiences
                and offer exceptional services, blending culinary artistry with
                warm hospitality.
              </p>
              <button className="bg-green-500 font-semibold text-white px-8 py-3 rounded-full">
                <Link
                  to={"menu/6558d8167f54fb2373343855"}
                  className="text-white"
                >
                  Explore
                </Link>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
              {serviceLists.map((service) => (
                <div
                  key={service.id}
                  className="shadow-xl rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer transform hover:scale-105 hover:shadow-lg hover:border hover:border-indigo-600 transition-all duration-200"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="mx-auto h-20"
                  />
                  <h5 className="pt-3 font-bold">{service.title}</h5>
                  <p className="text-[#90BD95] font-medium">{service.des}</p>
                  {service.id === 1 && (
                    <FontAwesomeIcon
                      icon={faUtensils}
                      className="text-2xl text-blue-500"
                    />
                  )}
                  {service.id === 2 && (
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-2xl text-blue-500"
                    />
                  )}
                  {service.id === 3 && (
                    <FontAwesomeIcon
                      icon={faShoppingBasket}
                      className="text-2xl text-blue-500"
                    />
                  )}
                  {service.id === 4 && (
                    <FontAwesomeIcon
                      icon={faGift}
                      className="text-2xl text-blue-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
