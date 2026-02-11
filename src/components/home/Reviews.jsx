import React from 'react'
import ReviewCard from "../../ui/review-card/ReviewCard";
import Section from "../../ui/section/Section";
import { Star} from "lucide-react";
import { REVIEWS } from '../../mock-data/ReviewsMock';


const Reviews = () => {
  return (
    <Section id="reviews" title="What Our Customers Say" subtitle="Don't just take our word for it.">
    <div className="grid md:grid-cols-3 gap-6">
      {REVIEWS.map((review, i) => (
        <ReviewCard key={i}>
            <div className="flex text-yellow-500 mb-2">
              <Star className="w-5 h-5" fill="currentColor" stroke="none" />
              <Star className="w-5 h-5" fill="currentColor" stroke="none" />
              <Star className="w-5 h-5" fill="currentColor" stroke="none" />
              <Star className="w-5 h-5" fill="currentColor" stroke="none" />
              <Star className="w-5 h-5" fill="currentColor" stroke="none" />
            </div>
            <p className="text-sm italic leading-relaxed text-gray-700">"{review.text}"</p>
            <div className="mt-4 text-sm font-semibold text-gray-800">{review.name}</div>
            <div className="text-xs text-muted-foreground">{review.city}</div>
        </ReviewCard>
      ))}
    </div>
  </Section>
  )
}

export default Reviews