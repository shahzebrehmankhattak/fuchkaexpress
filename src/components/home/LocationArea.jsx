import React from "react";
import Card from "../../ui/card/Card";
import Section from "../../ui/section/Section";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationArea = () => {
  return (
    <Section
      id="location"
      title="Where to Find Us"
      subtitle="Regularly in and around Farmingville. Check socials for the day’s spot."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              title="Fuchka Xpress Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.0408325954195!2d-73.02965672318874!3d40.82706677137642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e847509602577b%3A0x96dc948a6a4835f8!2sFuchka%20Xpress!5e0!3m2!1sen!2s!4v1756109972902!5m2!1sen!2s"
              width="600"
              height="450"
              className="w-full h-full border-0 rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            This map is a general area. DM or call for today’s exact pin.
          </div>
        </Card>
        <div className="space-y-4">
          <Card>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-red-700" />
              <div>
                <h4 className="font-semibold text-green-700">Service Area</h4>
                <p className="text-sm text-muted-foreground">
                  15 Pinedale Avenue, Farmingville, NY 11738
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-red-700" />
              <div>
                <h4 className="font-semibold text-green-700">Call / Text</h4>
                <p className="text-sm text-muted-foreground">631-416-7039</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-red-700" />
              <div>
                <h4 className="font-semibold text-green-700">Email</h4>
                <p className="text-sm text-muted-foreground">
                  fuchkaxpress@gmail.com
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default LocationArea;
