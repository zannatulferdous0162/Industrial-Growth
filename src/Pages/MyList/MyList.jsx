import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Loading from '../../Components/Loading/Loading';
import { authContext } from '../../AuthProbider/Provider';
import { Link } from 'react-router-dom';
const MyList = () => {
    const { user } = useContext(authContext)
    const [datas, setDatas] = useState([])
    const [sortBy, setSortBy] = useState('name');
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://assainment-10-server-gamma.vercel.app/product?email=${user?.email}`)
            .then(data => {
                console.log(data.data)
                setDatas(data.data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <Loading></Loading>
    }


    const sortedData = [...datas].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.item_name.localeCompare(b.item_name);
            case 'price':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };


    const handeldelete = (productId,setDatas) => {
    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assainment-10-server-gamma.vercel.app/products/${productId}`)
                    .then(response => {
                        console.log('Response:', response.data);
                        if (response.data.acknowledged && response.data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                                
                            });
                            setDatas(prevDatas => prevDatas.filter(item => item._id !== productId));
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete the file.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the file.",
                            icon: "error"
                        });
                    });
            }
        });
    };
    return (
        <div className='py-4'>
            <h2 className='text-3xl text-center py-6'>Some Items</h2>
            {
                !loading && datas.length === 0 && <div>
                    <p className='text-center text-red-500 text-2xl'>You Have No Create Products</p>
                </div>
            }
            {
                !loading && datas.length !== 0 && <div className='flex justify-center items-center mb-4'>
                    <label htmlFor='sortSelect' className='mr-2'>
                        Sort by:
                    </label>
                    <select
                        id='sortSelect'
                        value={sortBy}
                        onChange={handleSortChange}
                        className='px-2 py-1 border rounded-md'
                    >
                        <option value='name'>Name</option>
                        <option value='price'>Price</option>
                        <option value='rating'>Rating</option>
                    </select>
                </div>
            }
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    sortedData.map(data => (
                        <div key={data._id} className="card card-compact  bg-base-100 shadow-xl">
                            <figure >
                                <img className='h-[300px]' src={data.image} alt={data.name} />

                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.item_name}!</h2>
                                <p className='text-xl '>{data.short_description}</p>
                                <p className='text-xl text-orange-400'>Price: ${data.price}</p>
                                <p className='text-xl'>Rating: {data.rating}</p>
                                <p className='text-xl'>Stock: {data.stockStatus}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/update/${data._id}`}><button className="btn btn-primary">Update</button></Link>
                                    <button  onClick={() => handeldelete( data._id,setDatas)}className="btn btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyList;