import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../AuthProbider/Provider";

import { useTypewriter } from 'react-simple-typewriter'
const NavBar = () => {
    const { user,logOut}=useContext(authContext)
    const handelLogOut=()=>{
        logOut().then(()=>{
         
        }).catch(error=>console.log(error))
    }
    const [text] = useTypewriter({
        words: ['Industrial', 'Growth','Industrial Growth'],
        loop: 0
      })
    const links = <>
       <div className="space-x-2 flex">
       

       <li >
        <NavLink 
        className={({isActive}) => isActive? 'text-[#23BE0A] btn btn-sm font-bold' :  'font-bold'}  to='/'>Home
        </NavLink>
        </li>
       <li >
        <NavLink 
        className={({isActive}) => isActive? 'text-[#23BE0A] btn btn-sm font-bold' :  'font-bold'}  to='/allart&carft'>ALL Art&Carft
        </NavLink>
        </li>
       <li >
        <NavLink 
        className={({isActive}) => isActive? 'text-[#23BE0A] btn btn-sm font-bold' :  'font-bold'}  to='/addcraft'>Add Carft
        </NavLink>
       
        </li>
       <li >
        <NavLink 
        className={({isActive}) => isActive? 'text-[#23BE0A] btn btn-sm font-bold' :  'font-bold'}  to='/list'>My List Art&Carft
        </NavLink>
       
        </li>
       <li >
       {
        !user?.email&& <NavLink 
        className={({isActive}) => isActive? 'text-[#23BE0A] btn btn-sm font-bold' :  'font-bold'}  to='/login'>LogIn
        </NavLink>
       }
        </li>
       </div>

    </>



    return (
        <div className="navbar container ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">{text}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 flex items-center justify-end">
              <div>
              {
                    user?.email&&<button onClick={handelLogOut} className="btn btn-md bg-[#23BE0A] text-white">Logout</button>
                }
              </div>

               <div>
               {
                    user?.email&&<div className="avatar">
                    <div className="w-[50px] rounded-full">
                      <img class="" title={user?.displayName} src={user?.photoURL} />
                    </div>
                  </div>
                }
               </div>
            </div>
          
        </div>
    );
};

export default NavBar;