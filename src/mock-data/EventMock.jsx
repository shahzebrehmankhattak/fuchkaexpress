import weddingImage from '../assets/images/wedding.svg'
import communityPicnic from '../assets/images/comPic.svg'
import EidCeleb from '../assets/images/eid.svg'
import CommunityEvent from '../assets/images/community.svg'

import {
  Mail,
  Calendar,
  Utensils,
  Users,
  PartyPopper,
  GraduationCap,
} from "lucide-react";

export const EVENTS_IMAGES = [
  {
    src: weddingImage,
    text:"A festive Bengali wedding celebration",
    alt: "A festive Bengali wedding celebration",
  },
  {
    src: communityPicnic,
    text:"People enjoying an outdoor community gathering",
    alt: "People enjoying an outdoor community gathering",
  },
  {
    src: EidCeleb,
    alt: "Friends and family celebrating Eid",
    text: "Friends and family celebrating Eid",
  },
  {
    src: CommunityEvent,
    text: "A corporate team enjoying a catered event",
    alt: "A corporate team enjoying a catered event",
  },
];

export const EVENT_TYPES = [
  {
    title: "Weddings & Holuds",
    description:
      "Bring the flavors of home to your most special day. From the spicy kick of fuchka at a holud ceremony to a full catering spread, we make your celebration unforgettable.",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: "Birthdays & Parties",
    description:
      "Make your next birthday a hit with our authentic Bengali street food. Perfect for any get-together, our food truck will be the talk of the party.",
    icon: <PartyPopper className="w-6 h-6" />,
  },
  {
    title: "Corporate Events",
    description:
      "Impress clients or treat your team to a unique catering experience. Our hassle-free setup and delicious food make us a perfect choice for corporate lunches and events.",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    title: "Picnics",
    description:
      "Serving up delicious street food at community events, festivals, and fundraisers. We're the perfect partner to bring a taste of home to your neighborhood.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Anniversaries & Socials",
    description:
      "Celebrate milestones with a custom menu from our truck. Whether it's a small social gathering or a big anniversary party, we'll make it special.",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    title: "Graduation Parties",
    description:
      "Reward hard work with an unforgettable feast. Our catering services are a fun and unique way to celebrate a new chapter with friends and family.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];
