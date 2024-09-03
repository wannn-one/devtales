import React from 'react'
import { BiSpreadsheet } from 'react-icons/bi'
import { HiOutlineChartBar } from 'react-icons/hi'
import { LiaUserSolid } from 'react-icons/lia'
import { MdOutlineLocalLibrary } from 'react-icons/md'
import { LiaEditSolid } from 'react-icons/lia'
import { Blog } from '../../../context/Context'
import { Link } from 'react-router-dom'
import { secretEmail } from '../../../utils/helper'

const UserModal = (setModal) => {
    const { currentUser } = Blog();
    const dropdownMenu = [
        { title: "Profile", icon: <LiaUserSolid/>, path: `/profile/${currentUser?.uid}` },
        { title: "Library", icon: <MdOutlineLocalLibrary/>, path: "/library" },
        { title: "Stories", icon: <BiSpreadsheet/>, path: "/stories" },
        { title: "Stats", icon: <HiOutlineChartBar/>, path: "/stats" },
    ]

    return (
        <section
          className="absolute w-[18rem] p-6 bg-white right-0 top-[100%]
        shadows rounded-md z-50 text-gray-500">
            <Link 
                to="/write"
                className='flex md:hidden items-center gap-2 text-gray-500 pb-4'
            >
                <span className='text-2xl'>
                    <LiaEditSolid/>
                </span>
                <span className='text-md mt-2 hover:underline'>
                    Write
                </span>
            </Link>
          <div className="flex flex-col gap-4 border-b border-gray-300 pb-5">
            {dropdownMenu.map((link, i) => (
                <Link
                    onClick={() => setModal(false)}
                    className="flex items-center gap-2 text-gray-500 hover:text-black/70"
                    key={i}
                    to={link.path}
                >
                    <span className="text-2xl">{link.icon}</span>
                    <h2 className="hover:underline">{link.title}</h2>
                </Link>
            ))}
          </div>
          <button className="flex flex-col pt-5 cursor-pointer hover:text-black/70 text-left gap-2">
            Sign Out
            <span className="text-sm">{secretEmail(currentUser?.email)}</span>
          </button>
        </section>
    );
};

export default UserModal