import { Utensils, WheatOff, Droplet, Beef } from "lucide-react";

import Fuchka from '../assets/images/Fuchka.svg'
import JhaalMuri from '../assets/images/Jhaal Muri.svg'
import Momos from '../assets/images/Momos.svg'
import Haleem from '../assets/images/Haleem.svg'
import Tea from '../assets/images/Tea.svg'
import ChotPoti from '../assets/images/chotpoti.avif'

export const MENU = [
  {
    name: "Fuchka (Pani Puri)",
    img: Fuchka,
    blurb:
      "Each bite shatters with a crunch before flooding your mouth with spicy tamarind water, mashed potato, and chickpeas. The tang cuts through like a Dhaka monsoon breeze, pulling you straight to a street corner in New Market.",
    price: "$10",
    spiceLevel: 3,
    ingredients: ["Semolina shells", "Potato", "Chickpeas", "Tamarind water"],
    dietaryTags: ["Vegetarian", "Vegan"]
  },
  {
    name: "Chotpoti",
    img:ChotPoti,
    blurb:
      "A slow build of flavors — soft chickpeas, tender potatoes, mustard oil's sharp kick, green chilies tingling your tongue. It's the same warmth you felt on a chilly evening at a roadside stall near Dhaka University.",
    price: "$12",
    spiceLevel: 2,
    ingredients: ["Chickpeas", "Potato", "Egg", "Cilantro"],
    dietaryTags: ["Vegetarian"]
  },
  {
    name: "Jhaal Muri",
    img: JhaalMuri,
    blurb:
      "The crunch of puffed rice, the sting of green chili, the perfume of mustard oil — every mouthful is a quick jab of heat and nostalgia, like leaning against a train window on the way to Sylhet with a paper cone of muri.",
    price: "$8",
    spiceLevel: 2,
    ingredients: ["Puffed rice", "Mustard oil", "Spices", "Chili"],
    dietaryTags: ["Vegetarian", "Vegan"]
  },
  {
    name: "Haleem",
    img: Haleem,
    blurb:
      "Rich, slow-cooked wheat and lentils melt on your tongue, while shredded beef and fried onions give bursts of depth. It's Eid morning in a bowl, filling and familiar.",
    price: "$14",
    spiceLevel: 1,
    ingredients: ["Wheat", "Lentils", "Beef", "Spices"],
    dietaryTags: ["Beef"]
  },
  {
    name: "Momos",
    img: Momos,
    blurb:
      "Soft, steaming dumplings that give way to juicy spiced filling, followed by the sharp punch of chili-garlic sauce. One bite and you're back in a bustling Chittagong alley.",
    price: "$11",
    spiceLevel: 2,
    ingredients: ["Flour", "Minced chicken", "Garlic", "Chili sauce"],
    dietaryTags: ["Chicken", "Vegetarian"]
  },
  {
    name: "Milk Tea",
    img: Tea,
    blurb:
      "Strong, tannic tea wrapped in creamy milk and sugar, leaving that deep, malty aftertaste. Like sitting on your rooftop at dusk in Dhaka, hearing the call to prayer drift across the city.",
    price: "$4",
    spiceLevel: 0,
    ingredients: ["Tea leaves", "Milk", "Sugar"],
    dietaryTags: ["Dairy"]
  }
];


export const dietaryTagMap = {
  "Vegetarian": { color: "bg-green-100 text-green-600", icon: <Utensils className="w-3.5 h-3.5" /> },
  "Vegan": { color: "bg-green-100 text-green-600", icon: <Utensils className="w-3.5 h-3.5" /> },
  "Gluten": { color: "bg-green-100 text-green-600", icon: <WheatOff className="w-3.5 h-3.5" /> },
  "Beef": { color: "bg-green-100 text-green-600", icon: <Beef className="w-3.5 h-3.5" /> },
  "Chicken": { color: "bg-green-100 text-green-600", icon: <Beef className="w-3.5 h-3.5" /> },
  "Dairy": { color: "bg-green-100 text-green-600", icon: <Droplet className="w-3.5 h-3.5" /> },
};

