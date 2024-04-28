import React, { useContext } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { authContext } from '../../AuthProbider/Provider';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddCraft = () => {
  const {user}=useContext(authContext)
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const onSubmit = data =>{
   const{name,photo,stock,customization,price,category,rating,time,description}=data;
   const newPost={
    image:photo,
    item_name:name,
    subcategory_Name:category,
    short_description:description,
    price:parseFloat(price),
    rating:parseFloat(rating),
    customization:customization,
    processing_time:new Date(time),
    stockStatus:stock,
    email:user?.email,
    name:user?.displayName
   }
   axios.post('https://assainment-10-server-gamma.vercel.app/products', newPost)
   .then(response => {
    if (response.status >= 200 && response.status < 300) {
      console.log('Response:', response.data);
       toast.success('Success')
       reset()
    } else {
      console.error('Error:', response.statusText);
    }
   })
   .catch(error => {
     console.error('Error:', error);
   });
   console.log(newPost)
  };
  console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
  <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input   {...register("name", {required: true})} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Name" type="text"/>
    <select   {...register("stock", {required: true})} className="select select-bordered w-full max-w-xs mb-4 ">
  <option disabled selected>Select Stock</option>
  <option value='stock in'>Stock In</option>
  <option value='stock out'>Stock Out</option>
</select>
    <input {...register("photo", {required: true})}  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="photo" type="text"/>
    <select   {...register("customization", {required: true})} className="select select-bordered w-full max-w-xs mb-4 ">
  <option disabled selected>customization</option>
  <option value='yes'>Yes</option>
  <option value='no'>No</option>
</select>
    <input {...register("price", {required: true})}  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Price" type="number"/>
    {/* cetagory */}
    <select {...register("category", {required: true})} className="select select-bordered w-full max-w-xs mb-4 ">
  <option disabled selected>Sub Cetagory</option>
  <option value='Wooden Furniture & Sculptures'>Wooden Furniture & Sculptures</option>
  <option value='Wooden Home Decor'>Wooden Home Decor</option>
  <option value='Wooden Utensils and Kitchenware'>Wooden Utensils and Kitchenware</option>
  <option value='Jute Home Deco'>Jute Home Deco</option>
  <option value='Jute Kitchenware & utensils'>Jute Kitchenware & utensils</option>
  <option value='Jute and wooden jewellery'>Jute and wooden jewellery</option>
</select>
    <input {...register("rating", {required: true})}  className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Rating" type="number"/>
    <input {...register("time", {required: true})} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Time" type="datetime-local"/>

    <textarea {...register("description", {required: true})}  className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
    

    <div className="icons flex text-gray-500 m-2">
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
    </div>
    <div className="buttons flex justify-end">
    
      <button className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
    </div>
  </div>
        </form>
    );
};

export default AddCraft;