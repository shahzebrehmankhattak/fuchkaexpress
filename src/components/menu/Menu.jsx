import React from 'react'
import Section from '../../ui/section/Section'
import Card from '../../ui/card/Card'
import { motion } from "framer-motion";
import { MENU } from '../../mock-data/MenuMock';
import { dietaryTagMap } from '../../mock-data/MenuMock';

const Menu = () => {

  return (
    <main>
    <Section title="Food Menu" subtitle="Easy to pick. Hard to share.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENU?.map((item) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <img src={item.img} alt={item.name} className="w-full h-44 object-cover rounded-xl" />
              <div className="mt-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg text-green-700">{item.name}</h3>
                  <span className="text-sm text-muted-foreground">{item.price}</span>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Spice:</span>
                  <span className="text-lg">
                    {item.spiceLevel === 1 && "🌶️"}
                    {item.spiceLevel === 2 && "🌶️🌶️"}
                    {item.spiceLevel === 3 && "🌶️🌶️🌶️"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item?.dietaryTags?.map((tag) => {
                    const tagInfo = dietaryTagMap[tag];
                    if (!tagInfo) return null;
                    return (
                      <span key={tag} className={`inline-flex items-center gap-1.5 ${tagInfo.color} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                        {tagInfo.icon}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Food Allergy and Spicy Warning */}
      <div className="mt-8">
      <Card>
        <div className="flex ">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8.257 3.51a1.25 1.25 0 011.892 0L14.75 8.75a1.25 1.25 0 01-.941 2.064H10.198a.75.75 0 00-.705.512l-1.427 4.281a1.25 1.25 0 01-2.385-.795l1.04-3.123h-2.128a1.25 1.25 0 01-1.04-1.993l3.528-5.74zM9 13.5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-semibold text-green-700">Food Allergy & Spicy Warning</h3>
            <div className="mt-2 text-sm text-gray-900">
              <p>Our food may contain traces of nuts, gluten, or other allergens. Please inform us of any allergies before ordering. Many of our dishes are prepared with a high level of spice. Proceed with caution.</p>
            </div>
          </div>
        </div>
      </Card>
      </div>
     
      
      <div className="mt-8 text-sm text-red-800">
        * Prices may vary with events and specials.
      </div>
    </Section>
  </main>
  )
}

export default Menu