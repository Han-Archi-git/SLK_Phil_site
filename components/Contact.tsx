import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Info Side */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-12">Contact</h2>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <MapPin className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Office</h4>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    서울특별시 마포구 양화로8길5 소천빌딩7층<br />
                    ((주)SLK & (주)PhilArt 건축사사무소)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Phone className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Phone</h4>
                  <p className="text-neutral-400 font-light">02-323-9621 / 02-333-1220</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Mail className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Email</h4>
                  <p className="text-neutral-400 font-light">spaceline@empas.com<br />phil333@empas.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Clock className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Work Hours</h4>
                  <p className="text-neutral-400 font-light">Mon - Fri: 09:00 - 18:00</p>
                  <p className="text-neutral-500 text-sm mt-1">Sat, Sun, Holiday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side (Simulated) */}
          <div className="md:w-1/2 h-80 md:h-auto bg-neutral-900 relative group overflow-hidden rounded-[2rem] shadow-2xl border border-white/10">
            {/* Static Map Image (User Provided) */}
            <img
              src="/map_preview.png"
              alt="Map Location"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <a
              href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%99%94%EB%A1%9C8%EA%B8%B85"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-6 right-6 bg-[#03C75A] text-white px-6 py-3 text-xs font-bold hover:bg-[#02b351] transition-colors uppercase tracking-wider flex items-center gap-2"
            >
              <span>View on Naver Map</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;