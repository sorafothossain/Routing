import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";





const Sidebar = () => {
  return (
    <div className='bg-gray-300 min-h-screen p-5'>
    <ul>
      <li>
        <Link className='flex gap-1 items-center' to="/">
        <span> <MdOutlineDashboardCustomize /> </span>
        <p>Dashboard</p>
        </Link>
      </li>
      <li>
        <Link className='flex gap-1 items-center' to="/projects">
          <span><GoProjectSymlink /></span>
          <p>Projects</p>
        </Link>
      </li>
      <li>
        <Link className='flex gap-1 items-center' to="/tasks">
          <span> <FaTasks /></span>
          <p>Tasks</p>
        </Link>
      </li>
      <li>
        <Link className='flex gap-1 items-center' to="/settings">
          <span><MdSettings /></span>
          <p>Settings</p>
        </Link>
      </li>
      <li>
        <Link className='flex gap-1 items-center' to="/help">
          <span> <IoMdHelp/> </span>
          <p>Help</p>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default Sidebar