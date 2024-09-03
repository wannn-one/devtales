import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { LiaEditSolid } from 'react-icons/lia'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/Logo.svg"
import ProfPic from "../../../assets/pp.jpeg"
import Search from './Search'
import Modal from '../../../utils/Modal'
import UserModal from './UserModal'
import { Blog } from '../../../context/Context'
import Loading from '../../../utils/Loading'

const DashboardHeader = () => {

  const { allUsers, userLoading, currentUser } = Blog();
  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const getUserData = allUsers.find((user) => user.id === currentUser?.uid);
  return (
    <header className='border-b border-gray-200'>
      {userLoading && <Loading />}
      <div className='size h-[60px] flex items-center justify-between'>
        {/* left side */}
        <div className='flex items-center gap-3'>
          <Link to={"/dashboard"}>
            <img
              className='h-[3.5rem]'
              src={Logo}
              alt='logo'
            />
          </Link>
          <Search modal={searchModal} setModal={setSearchModal}/>
        </div>
        {/* right side */}
        <div className='flex items-center gap-3 sm:gap-7'>
          <span className='flex sm:hidden text-3xl text-gray-300 cursor-pointer' onClick={() => setSearchModal(true)}>
            <CiSearch/>
          </span>
          <Link to="/write" className='hidden md:flex items-center gap-1 text-gray-500'>
            <span>
              <LiaEditSolid className='text-3xl' />
            </span>
            <span className='text-sm mt-2 hover:underline'>
              Write
            </span>
          </Link>
          <span className='text-3xl text-gray-500 cursor-pointer'>
            <IoMdNotificationsOutline/>
          </span>
          <div className='flex items-center relative'>
            <img
              onClick={() => setModal(true)}
              className="w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer"
              src={getUserData?.userImg ? getUserData?.userImg : "/profile.jpg"}
              alt='profile'
            />
            <span className='text-gray-500 cursor-pointer'>
              <MdKeyboardArrowDown/>
            </span>
            <Modal modal={modal} setModal={setModal}>
              <div className={`${
                  modal ? "visible opacity-100%" : "invisible opacity-0"
                } transition-all duration-100`}>
                <UserModal setModal={setModal}/>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader