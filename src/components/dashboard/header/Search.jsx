import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Modal from '../../../utils/Modal'

const Search = ({modal, setModal}) => {
  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        <div className={`absolute sm:relative right-4 left-4 top-[4rem] sm:left-0 sm:top-0 ${modal ? "visible opacity-100" : "invisible opacity-0 sm:visible sm:opacity-100"} transition-all duration-100`}>
          <div className='flex items-center gap-1 bg-gray-100 px-2 rounded-full relative z-10'>
            <span className='text-2xl text-gray-500'>
              <CiSearch/>
            </span>
            <input 
              className='bg-transparent outline-none py-[0.7rem] text-sm w-full' 
              type='text'
              placeholder='Search...'
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Search