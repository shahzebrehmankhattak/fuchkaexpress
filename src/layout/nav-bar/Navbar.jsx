import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../ui/container/Container";
import GreenButton from "../../ui/green-button/GreenButton";
import FXLogo from '../../assets/images/FXLogo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Food Menu", to: "/menu" },
    { name: "Events", to: "/events" },
    { name: "Contact", to: "/contact" },
  ];


  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/75 border-b">
      <Container>
        <div className="flex items-center justify-between h-16 sm:justify-between">
          <button
            className="sm:hidden p-2 rounded-md border"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        <NavLink
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 font-extrabold text-xl tracking-tight sm:static sm:transform-none"
          >
            <img src={FXLogo} alt="FXLogo" width={100} height={100} />
          </NavLink>

          <nav className="hidden sm:flex gap-6 text-sm">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-green-700"
                    : "text-muted-foreground hover:text-green-700"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <GreenButton to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1n6NBVS8YcG8OjozDFjDgH4SwDBeG279cpPv1mVL8puLUBon1i9bP-F8pNMMBVMmQdqzaiRgwa" className="hidden sm:inline-flex">Book Us</GreenButton>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sm:hidden mt-2 mb-2 flex flex-col gap-2 border-t pt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-green-700"
                      : "text-muted-foreground hover:text-green-700"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navbar;
