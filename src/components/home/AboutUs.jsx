import React from 'react'
import PrimaryButton from "../../ui/primary-button/PrimaryButton";
import GreenButton from "../../ui/green-button/GreenButton";
import Section from "../../ui/section/Section";
import aboutUs from '../../assets/images/AboutUS.svg'


const AboutUs = () => {
  return (
    <Section id="about" title="About Us" subtitle="We keep it simple and do it right.">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        alt="Fuchka Xpress prep"
        className="rounded-2xl w-full h-72 object-cover"
        src={aboutUs}
      />
      <div>
        <p className="text-base leading-relaxed">
          You know that feeling, walking down a Dhaka street and catching that nostalgic spell of hot chotpoti and rich haleem hanging in the air? That’s the memory we live for. We missed it here on Long Island, so we decided to build it ourselves.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Fuchka Xpress is our answer to that craving. No fusion, no fluff. Just the honest, unapologetic flavors of home, served right here from our truck. It’s the real deal, for those who know the difference.
        </p>
        <div className="mt-6 flex gap-3">
          <PrimaryButton to="/menu">Browse Food</PrimaryButton>
          <GreenButton to="/contact">Contact Us</GreenButton>
        </div>
      </div>
    </div>
  </Section>
  )
}

export default AboutUs