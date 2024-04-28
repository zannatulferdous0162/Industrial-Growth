import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
const Details = () => {
    const data=useLoaderData()
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={data.image}className="w-[300px] rounded-lg shadow-2xl" />
    <div id="my-anchor-element">
      <h1 className="text-5xl font-bold">{data.item_name}</h1>
      <p className="py-2 text-xl">Subcategory Name: {data.subcategory_Name}</p>
      <p className="py-2 text-xl">Details: {data.short_description}</p>
      <p className="py-2 text-xl">Customization: {data.customization}</p>
      <p className="py-2 text-xl">Time: {data.processing_time}</p>
      <p className="py-2 text-xl">Stock: {data.stockStatus}</p>
      <p className="py-2 text-xl text-orange-400 font-bold">Price: ${data.price}</p>
      <p className="py-2 text-xl text-yellow-500 font-bold flex items-center gap-1">rating: {data.rating} <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</p>
    </div>
      <Tooltip
  anchorSelect="#my-anchor-element"
  content={data.item_name}
/>
  </div>
</div> 
        </div>
    );
};

export default Details;