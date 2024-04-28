import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router-dom';

const AllData = () => {
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
        <div>
            
            <h2 className='py-5 text-3xl text-center'>All Products</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Coustomize</th>
        <th>Show Details</th>
      </tr>
    </thead>
    <tbody>
      {
        datas.map(data=>(
            <tr key={data._id}>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={data.image} alt={data.item_name} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{data.item_name}</div>
                  <div className="text-sm opacity-50">{data.subcategory_Name}</div>
                </div>
              </div>
            </td>
            <td>
             ${
                data.price
             }
      

            </td>
            <td>{data.stockStatus}</td>
            <th>
              <p>{data.customization}</p>
            </th>
            <th>
            <Link to={`/details/${data._id}`}>  <button className="btn btn-ghost btn-xs bg-blue-500 hover:bg-blue-500  text-white">Show Details</button></Link>
            </th>
          </tr> 
        ))
      }
    
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllData;