import React, { useState, useEffect } from "react";
import Card from "../../ui/card/Card";
import Section from "../../ui/section/Section";
import SuccessModal from "../../ui/modal/Modal";
import { motion } from "framer-motion";
import {
  Utensils,
  Clock,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import ImageSlideshow from "../../ui/slider/ImageSlideshow";
import { EVENT_TYPES } from "../../mock-data/EventMock";
import { EVENTS_IMAGES } from "../../mock-data/EventMock";

const Events = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.eventDate ||
      !formData.guestCount ||
      !formData.notes
    ) {
      setSubmissionError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      await emailjs.send(
        "service_vi5iagg", // service ID
        "template_ksiafag", // template ID
        { ...formData },
        "85Uyxhb7dX1z3mo91" // public key
      );
      setIsModalOpen(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        guestCount: "",
        notes: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmissionError("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Section
        title="Events & Party Booking"
        subtitle="No Bengali celebration is complete without us."
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <h3 className="text-xl font-semibold text-green-700">Book the Truck</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Whether it’s a wedding holud, a community picnic at Eisenhower
                Park, or an Eid get-together in your backyard. One thing is
                certain: the moment guests see our Fuchka Xpress truck roll in,
                the nostalgia hits. The sound of shells cracking, the smell of
                mustard oil and tamarind—these are the tastes people grew up
                with. We’re the missing piece that makes a Bengali gathering
                feel whole.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 gap-4"
              >
                <input
                  name="name"
                  className="border rounded-xl p-3"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="email"
                  className="border rounded-xl p-3"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="phone"
                  className="border rounded-xl p-3"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  name="eventDate"
                  className="border rounded-xl p-3"
                  placeholder="Event date"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="guestCount"
                  className="border rounded-xl p-3"
                  placeholder="Guest count"
                  type="number"
                  min="1"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="notes"
                  className="border rounded-xl p-3"
                  placeholder="Location & notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-2xl px-5 py-3 font-semibold border shadow-sm hover:shadow transition w-fit bg-green-700 text-white hover:bg-green-800"
                >
                  {isSubmitting ? "Sending..." : "Request Availability"}
                </button>
                {submissionError && (
                  <div className="text-red-600 mt-2">{submissionError}</div>
                )}
              </form>
            </Card>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            <Card>
              <div className="flex items-start gap-3">
                <Utensils className="w-20  mt-1 text-red-700" />
                <div>
                  <h4 className="font-semibold text-green-700">Custom Add Ons</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We understand that every event is unique. If you have a
                    specific Bengali street food craving that's not on our core
                    menu—like Pitha or a different type of Bhaja—just ask! We're
                    always open to working with you to create a custom menu that
                    fits your celebration, provided it's something we can
                    prepare and serve from our food truck.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Clock className="w-20  mt-1 text-red-700" />
                <div>
                  <h4 className="font-semibold text-green-700">Typical Service Window</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our standard service window is 2-3 hours, which is typically
                    plenty of time to serve all your guests. We'll arrive at
                    your location 45-60 minutes before the serving time to
                    ensure everything is set up, prepped, and ready to go so the
                    line can start on time. We take care of all the setup and
                    breakdown, making it a seamless experience for you.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <DollarSign className="w-20  mt-1 text-red-700" />
                <div>
                  <h4 className="font-semibold text-green-700">Payment</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    To secure your event date, a non-refundable deposit is
                    required at the time of booking. The remaining balance is
                    due on the day of the event, before we begin serving. We
                    accept various forms of payment, including cash, card, and
                    Zelle, for your convenience.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-l-4 border-red-700 p-4 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-20 text-red-700  mt-1" />
                <div className="ml-3">
                  <h4 className=" font-semibold text-green-700">
                    Cancellation Policy
                  </h4>
                  <div className="mt-1 text-sm text-gray-900">
                    <p>
                      Order cancellation needs to be made at least 24 hours
                      prior to the event date. Deposits are non-refundable in
                      case of cancellation without 24-hour notice.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">We Cater All Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {EVENT_TYPES.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl border bg-green-100 shadow-sm text-green-700">
                      {event.icon}
                    </div>
                    <h4 className="font-semibold text-green-700">{event.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {event.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <ImageSlideshow images={EVENTS_IMAGES} />
        </div>
      </Section>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default Events;
