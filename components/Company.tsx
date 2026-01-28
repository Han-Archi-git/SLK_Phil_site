import React from 'react';
import { PenTool, Hammer, FileText } from 'lucide-react';
import { NAVER_BLOG_ID, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';

const Company: React.FC = () => {
  return (
    <section id="company" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-black mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-black block"></span>
              About Us
            </h2>
            <div className="text-lg font-medium text-black mb-6">
              (주)SLK종합건축사사무소 & (주)PhilArt건축사사무소
            </div>
            <div className="space-y-6 text-neutral-600 leading-relaxed mb-12 keep-all">
              <p>
                건축설계부터 인허가, 시공, 감리까지<br />
                건축 전 과정을 아우르는 통합 솔루션을 제공합니다.
              </p>
              <p>
                두 전문가 그룹의 협업을 통해<br />
                복잡한 건축 법규를 체계적으로 해결하고,<br />
                설계 의도를 충실히 구현하는 책임 있는 시공을 진행합니다.
              </p>
              <p>
                자산 가치를 높이는 컨설팅으로<br />
                고객의 성공적인 프로젝트를 함께 만들어갑니다.
              </p>
            </div>

            {/* Service Pillars */}
            <div className="grid grid-cols-1 gap-12 mb-16">
              <div className="flex gap-6 group items-start">
                <div className="p-3 bg-neutral-50 group-hover:bg-black transition-colors duration-300 h-fit mt-1 border border-neutral-100">
                  <PenTool className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-1">Architectural Design</h4>
                  <p className="text-lg font-bold text-black mb-1">건축 기획 및 설계</p>
                  <p className="text-neutral-500 leading-relaxed text-sm font-light keep-all">
                    창의적 디자인과 합리적 계획으로 최적의 공간을 제안합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group items-start">
                <div className="p-3 bg-neutral-50 group-hover:bg-black transition-colors duration-300 h-fit mt-1 border border-neutral-100">
                  <FileText className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-1">Administrative Solution</h4>
                  <p className="text-lg font-bold text-black mb-1">인허가·행정 솔루션</p>
                  <p className="text-neutral-500 leading-relaxed text-sm font-light keep-all">
                    신축, 증축, 대수선, 용도변경 등 다양한 건축행위에 따른 인허가와 행정 절차를 체계적으로 검토하고 통합 관리합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group items-start">
                <div className="p-3 bg-neutral-50 group-hover:bg-black transition-colors duration-300 h-fit mt-1 border border-neutral-100">
                  <Hammer className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-1">Turnkey Solution</h4>
                  <p className="text-lg font-bold text-black mb-1">시공 턴키 솔루션</p>
                  <p className="text-neutral-500 leading-relaxed text-sm font-light keep-all">
                    설계부터 시공까지 전 과정을 통합 관리하여 프로젝트의 완성도와 효율을 극대화합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect Section */}
            <div className="border-t border-neutral-100 pt-10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Connect with us</h4>
              <div className="flex flex-wrap gap-8">
                {/* Naver Blog */}
                {NAVER_BLOG_ID && (
                  <a href={`https://blog.naver.com/${NAVER_BLOG_ID}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                    <div className="p-2 border border-neutral-100 group-hover:border-[#03C75A] group-hover:bg-[#03C75A]/5 transition-all rounded-md">
                      <svg className="w-5 h-5 fill-[#03C75A]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-neutral-600 group-hover:text-[#03C75A] transition-colors">Naver Blog</span>
                  </a>
                )}

                {/* Instagram */}
                {INSTAGRAM_URL && (
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                    <div className="p-2 border border-neutral-100 group-hover:border-[#E4405F] group-hover:bg-[#E4405F]/5 transition-all rounded-md">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="insta_gradient_company" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#833AB4" />
                            <stop offset="50%" stopColor="#C13584" />
                            <stop offset="100%" stopColor="#FCAF45" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#insta_gradient_company)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-neutral-600 group-hover:text-[#E4405F] transition-colors">Instagram</span>
                  </a>
                )}

                {/* Youtube */}
                {YOUTUBE_URL && (
                  <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                    <div className="p-2 border border-neutral-100 group-hover:border-[#FF0000] group-hover:bg-[#FF0000]/5 transition-all rounded-md">
                      <svg className="w-5 h-5 fill-[#FF0000]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-neutral-600 group-hover:text-[#FF0000] transition-colors">YouTube</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Image Grid - Reverted to 2 images */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Office"
              className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            <div className="flex gap-6">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Detail"
                className="w-1/2 h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
              <div className="w-1/2 flex flex-col justify-end">
                <div className="border-l-4 border-black pl-6 pb-2">
                  <p className="font-bold text-xl mb-1">Creative</p>
                  <p className="text-neutral-500 text-sm">Space & People</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
