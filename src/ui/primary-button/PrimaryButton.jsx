import React from 'react'
import { NavLink } from "react-router-dom";

const PrimaryButton = ({ children, to }) => (
  <NavLink
    to={to}
    className="inline-flex items-center 
    justify-center rounded-2xl px-2 py-1 sm:px-5 sm:py-3 text-[14px] sm:text-[16px] 
    font-semibold border shadow-sm hover:shadow transition focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 focus:ring-red-500 bg-red-700 text-white hover:bg-red-800"
  >
    {children}
  </NavLink>
);


export default PrimaryButton


