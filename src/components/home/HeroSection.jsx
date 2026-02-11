import React from 'react'
import Container from "../../ui/container/Container";
import PrimaryButton from "../../ui/primary-button/PrimaryButton";
import GreenButton from "../../ui/green-button/GreenButton";
import Card from "../../ui/card/Card";
import { motion } from "framer-motion";
import { MapPin ,Calendar, Utensils } from "lucide-react";
import bgImage from '../../assets/images/bg.jpeg'

const HeroSection = () => {
  return (
    <div className="relative">
    <div
      className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-b-[2.5rem]"
      style={{
        backgroundImage:
          `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Container>
        <div className="relative z-10 h-[70vh] min-h-[520px] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-2xl"
          >
            <p className="uppercase tracking-widest text-sm mb-2">Authentic Bengali Street Food</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Fuchka Xpress
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              No gimmicks—just the real flavors you grew up with. Crispy fuchka, honest chotpoti, and haleem that actually sticks to your ribs.
            </p>
            <div className="mt-6 flex gap-3">
              <PrimaryButton to="/menu">See the Menu</PrimaryButton>
              <GreenButton to="/events">Book the Truck</GreenButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>

    {/* Badges */}
    <Container>
      <div className="-mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[{
          icon: <Utensils className="w-6 h-6" />, title: "Authentic Taste", text: "Traditional recipes, straightforward prep, bold flavors."
        },{
          icon: <MapPin className="w-6 h-6" />, title: "We Have a Spot", text: "Find us in Selden and around Long Island."
        },{
          icon: <Calendar className="w-6 h-6" />, title: "Events & Parties", text: "Nassau and Suffolk County—yes, we cater."
        }].map((b, i) => (
          <Card key={i}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl border bg-green-100 shadow-sm text-green-700">{b.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-green-700">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </div>
  )
}

export default HeroSection