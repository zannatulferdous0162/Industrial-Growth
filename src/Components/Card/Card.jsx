import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
const Card = () => {
    const [datas,setDatas]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('https://assainment-10-server-gamma.vercel.app/products')
        .then(data=>{
            console.log(data.data)
            setDatas(data.data)
            setLoading(false)
        })
    },[])
    if (loading) {
        return <Loading></Loading>
      }
    return (
        <div className='py-4'>
         <h2 className='text-3xl text-center py-6'>Some Items</h2>

         <div className='grid lg:grid-cols-3 gap-3'>
            {
                datas?.slice(0,6).map(data=>(
                    <div key={data._id} className="card card-compact  bg-base-100 shadow-xl">
                    <figure >
                        <img   className='h-[300px]' src={data.image} alt={data.name} />
                        
                        </figure>
                    <div className="card-body">
                      <h2 className="card-title">{data.item_name}!</h2>
                      <p className='text-xl '>{data.short_description}</p>
                      <p className='text-xl text-orange-400'>Price: ${data.price}</p>
                      <p className='text-xl'>Rating: {data.rating}</p>
                      <p className='text-xl'>Stock: {data.stockStatus}</p>
                      <div className="card-actions justify-end">
<Link to={`/details/${data._id}`}>
<button    className="btn btn-primary">Show Detils</button>
</Link>
                       
                      </div>
                    </div>
                  </div>
                ))
            }
         </div>
        </div>
    );
};

export default Card;