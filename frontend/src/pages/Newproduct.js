// import React from "react";
// import { BsCloudUpload } from "react-icons/bs";

// const Newproduct = () => {
//   return (
//     <div className="p-4">
//       <form className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white">
//         <label htmlFor="name">Name</label>
//         <input type={"text"} name="name" className="bg-slate-200 p-1 my-1"/>

//         <label htmlFor="category">Category</label>
//         <select className="bg-slate-200 p-1 my-1" id='category'>
//           <option value="" disabled selected>
//             Select the Category
//           </option>
//           <option value={"fruits"}>Fruits</option>
//           <option value={"vegetables"}>Vegetables</option>
//           <option value={"iceCream"}>Ice Cream</option>
//           <option value={"dosa"}>Dosa</option>
//           <option value={"pizza"}>Pizza</option>
//           <option value={"rice"}>rice</option>
//           <option value={"cake"}>Cake</option>
//           <option value={"burger"}>Burger</option>
//           <option value={"panner"}>Panner</option>
//           <option value={"sandwich"}>Sandwich</option>
//           <option value="snacks">Snacks</option>
//         </select>

//         <label htmlFor="image">Image</label>
//         <div id="image" className="h-40 w-full bg-slate-200 rounded flex items-center justify-center">
//           <span className="text-6xl"><BsCloudUpload /></span>
//          </div>

//          <label htmlFor="price" className="my-1">Price</label>
//          <input type={"text"} className="bg-slate-200 p-1 my-1"/>

//          <label htmlFor="description">Description</label>
//          <textarea rows={2} className="bg-slate-200 p-1 my-1 resize-none"></textarea>

//          <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow">Save</button>
//       </form>
//     </div>
//   );
// };

// export default Newproduct;

import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Newproduct = () => {
  const [data,setData] = useState({
    name : "",
    category : "",
    image : "",
    price : "", 
    description : ""
  })


  const handleOnChange = (e)=>{
    const {name,value} = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value

      }
    })

  }
  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data);

    setData((preve)=>{
      return{
        ...preve,
        image : data,
      }
    })
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()
    console.log(data)

    const {name,image,category,price} =data
    
    if(name && image && category && price){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes = await fetchData.json()
  
      console.log(fetchRes)
      toast(fetchRes.message)
        
        setData(()=>{
          return{
            name : "",
            category : "",
            image : "",
            price : "", 
            description : "" 
          }
        })
    }
    else{
      toast("Enter Required Fields")
    }
  }
  
  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-md shadow-md flex flex-col p-6 bg-white rounded-lg" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-lg font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-slate-200 p-2 rounded mb-4"
          placeholder="Enter product name"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category" className="text-lg font-semibold mb-2">
          Category
        </label>
        <select
          className="bg-slate-200 p-2 rounded mb-4"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>
            Select the Category
          </option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetables"}>Vegetables</option>
          <option value={"iceCream"}>Ice Cream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>Rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>
          <option value={"snacks"}>Snacks</option>
          <option value={"chicken"}>Chicken</option>
          <option value={"plater"}>Plater</option>
        </select>

        <label htmlFor="image" className="text-lg font-semibold mb-2">
          Image
        
        <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center mb-4 cursor-pointer">
          {
            data.image ? <img src={data.image} className="h-full" alt="" /> : <span className="text-6xl text-gray-600">
            <BsCloudUpload />
          </span>

          }
          
          <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>

        <label htmlFor="price" className="text-lg font-semibold mb-2" >
          Price
        </label>
        <input
          type="text"
          className="bg-slate-200 p-2 rounded mb-4"
          placeholder="Enter product price"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description" className="text-lg font-semibold mb-2">
          Description
        </label>
        <textarea
          rows={2}
          className="bg-slate-200 p-2 rounded mb-4 resize-none"
          placeholder="Enter product description"
          name="description"
          onChange={handleOnChange}
          value={data.description}
        ></textarea>

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium mb-2 rounded-full py-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;

