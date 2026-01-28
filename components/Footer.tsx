
import React from 'react';
import { NAVER_BLOG_ID, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-500 py-16 border-t border-neutral-900">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="text-white text-lg font-bold tracking-tight">(주)SLK종합건축사사무소</h3>
              <h3 className="text-white text-lg font-bold tracking-tight">(주)PhilArt건축사사무소</h3>
            </div>
            <p className="text-sm font-light text-neutral-600">Architectural Design & Construction Management</p>
          </div>

          {/* Social Icons with Brand Colors */}
          <div className="flex flex-wrap gap-6 text-sm font-medium tracking-wide">
            {/* Instagram */}
            {INSTAGRAM_URL && (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 group transition-colors"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="insta_gradient_footer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#C13584" />
                      <stop offset="100%" stopColor="#FCAF45" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#insta_gradient_footer)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-neutral-500 group-hover:text-black transition-colors">Instagram</span>
              </a>
            )}

            {/* Naver Blog */}
            <a
              href={`https://blog.naver.com/${NAVER_BLOG_ID}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 group transition-colors"
            >
              <svg className="w-5 h-5 fill-neutral-500 group-hover:fill-[#03C75A] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
              </svg>
              <span className="group-hover:text-white transition-colors">Naver Blog</span>
            </a>

            {/* Youtube */}
            {YOUTUBE_URL && (
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 group transition-colors"
              >
                <svg className="w-5 h-5 fill-neutral-500 group-hover:fill-[#FF0000] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="group-hover:text-white transition-colors">Youtube</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-900 pt-8 text-xs text-neutral-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} SLK & PhilArt Architects. All rights reserved.</p>
          <p className="hidden md:block">Designed by Archilog</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
