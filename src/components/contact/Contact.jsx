import React, { useState } from "react";
import SuccessModal from "../../ui/modal/Modal";
import Card from "../../ui/card/Card";
import Section from "../../ui/section/Section";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';
import TikTokIcon from '../../ui/icon/TikTokIcon'


const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const messageData = Object.fromEntries(formData.entries());

    if (!messageData.name || !messageData.email || !messageData.message) {
      setSubmissionError("Please fill out all required fields.");
      return;
    }

    try {

      await emailjs.send(
        "service_vi5iagg",    
        "template_j460lza",   
        messageData,       
        "85Uyxhb7dX1z3mo91"     
      );

      // Show success modal
      setIsModalOpen(true);
      form.reset();
      setSubmissionError("");

    } catch (error) {
      console.error("Error sending message: ", error);
      setSubmissionError("Failed to send message. Please try again later.");
    }
  };


  return (
    <main>
      <Section title="Contact Us" subtitle="Straightforward ways to reach us.">

        <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-red-700" />
              <div>
                <h4 className="font-semibold text-green-700">Phone</h4>
                <p className="text-sm text-muted-foreground">631-416-7039</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-red-700" />
              <div>
                <h4 className="font-semibold text-green-700">Email</h4>
                <p className="text-sm text-muted-foreground">fuchkaxpress@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-red-700" />
              <div>
                <h4 className="font-semibold text-green-700">Base Location</h4>
                <p className="text-sm text-muted-foreground">15 Pinedale Avenue, Farmingville, NY 11738</p>
              </div>
            </div>
            <hr/>
            <div className="flex items-start gap-3">
              <h4 className="font-semibold text-green-700">Social Media</h4>
            </div>
            <div className="flex items-center gap-4">
              <a href="http://facebook.com/profile.php?id=61579929561173" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="http://instagram.com/fuchka_xpress" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@fuchka.xpress" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-500 transition-colors">
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </Card>
          <Card>
            <h3 className="text-lg font-semibold text-green-700">Quick Message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send us a direct message and we'll get back to you soon.
            </p>
            <form
        onSubmit={handleMessageSubmit}
        className="mt-4 grid gap-3"
      >
        <input
          name="name"
          className="border rounded-xl p-3"
          placeholder="Name"
          required
        />
        <input
          name="email"
          className="border rounded-xl p-3"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          name="message"
          className="border rounded-xl p-3"
          placeholder="Your message"
          rows={4}
          required
        />
        <button
          type="submit"
          className="rounded-2xl px-5 py-3 font-semibold border shadow-sm hover:shadow transition w-fit bg-green-700 text-white hover:bg-green-800"
        >
          Send
        </button>

        {submissionError && (
          <div className="text-red-600 mt-2">{submissionError}</div>
        )}
      </form>

          </Card>
        </div>
      </Section>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default Contact;
