import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Welcome to Grand Vista Hotel, your comfortable home away from home
            in the heart of the city. We are a family-owned 3-star hotel
            dedicated to providing quality accommodations and friendly service
            at affordable rates.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our modern rooms feature all the essential amenities you need for a
            pleasant stay, including free WiFi, comfortable beds, and 24-hour
            front desk service. Whether youre traveling for business or leisure,
            were here to make your visit memorable.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                Address
              </h4>
              <p className="text-gray-600">
                123 Main Street
                <br />
                Downtown District
                <br />
                City, State 12345
              </p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                Phone
              </h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h4 className="text-lg font-semibold mb-2 text-gray-900">
                Email
              </h4>
              <p className="text-gray-600">info@grandvistahotel.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
