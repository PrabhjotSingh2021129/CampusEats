import React from "react";
import blueberryImage from "../asset/blueberry.jpg";
import liptonImage from "../asset/lipton.jpg";

const Contact = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-200 to-white">
      <h2
        className="text-4xl font-extrabold mb-6 text-center text-slate-700">
        Discover Our Canteens
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blueberry Canteen */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={blueberryImage}
            alt="Blueberry Canteen"
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <div className="text-black">
            <h3 className="text-2xl font-bold mb-2">Blueberry</h3>
            <p className="mb-4">
              Blueberry Canteen offers a diverse menu of delicious meals and
              snacks. From mouth-watering desserts to savory treats, Blueberry
              is the go-to spot for satisfying your cravings.
            </p>
            <div className="flex justify-between items-center text-gray-700">
              <div>
                <h4 className="font-bold mb-2">Operating Hours</h4>
                <p>Blueberry: 8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact Us</h4>
                <p>
                  Blueberry:{" "}
                  <span className="text-blue-500">blueberry@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <iframe
                title="Blueberry Canteen Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.2350247314455!2d75.85984391983645!3d30.860352050614743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a828f0e2f4837%3A0x259d4a96383031a2!2sBlue%20Berry!5e0!3m2!1sen!2sin!4v1700508073159!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                className="rounded-md"
              ></iframe>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Customer Reviews</h4>
              <p>
                "Absolutely love the food at Blueberry! Great service and a
                variety of tasty options."
              </p>
            </div>
          </div>
        </div>

        {/* Lipton Canteen */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={liptonImage}
            alt="Lipton Canteen"
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <div className="text-black">
            <h3 className="text-2xl font-bold mb-2">Lipton</h3>
            <p className="mb-4">
              Lipton Canteen is your destination for refreshing beverages and
              hearty meals. Enjoy a variety of beverages, snacks, and meals in a
              cozy environment at Lipton.
            </p>
            <div className="flex justify-between items-center text-gray-700">
              <div>
                <h4 className="font-bold mb-2">Operating Hours</h4>
                <p>Lipton: 10:00 AM - 7:00 PM</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact Us</h4>
                <p>
                  Lipton:{" "}
                  <span className="text-blue-500">lipton@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <iframe
                title="Lipton Canteen Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.2386517753415!2d75.86111544256363!3d30.859945876639824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a828f10e1ed19%3A0x64bef49379929f1d!2sLipton!5e0!3m2!1sen!2sin!4v1700507767086!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                className="rounded-md"
              ></iframe>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Customer Reviews</h4>
              <p>
                "Lipton never disappoints. The quality of food and quick
                delivery make it my go-to choice."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



