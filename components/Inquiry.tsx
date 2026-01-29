
import React, { useState } from 'react';
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Inquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '설계문의',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      // EmailJS configuration - using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          inquiry_type: formData.type,
          message: formData.message,
          to_email: 'taehee0512@gmail.com'
        },
        publicKey
      );

      setStatus('success');
      setStatusMessage('문의가 접수되었습니다. 곧 담당자가 연락드리겠습니다.');
      setFormData({ name: '', email: '', phone: '', type: '설계문의', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setStatusMessage('문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <section id="inquiry" className="py-32 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">프로젝트 문의</h2>
          <p className="text-neutral-500 leading-relaxed keep-all">
            건축 설계부터 시공, 인허가까지.<br/>
            프로젝트에 대한 궁금한 점을 남겨주시면 전문가가 상세히 안내해 드립니다.
          </p>
        </div>

        <div className="bg-white p-8 md:p-16 shadow-xl border border-neutral-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Name / Company</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black bg-transparent outline-none transition-colors placeholder-neutral-300"
                  placeholder="성함 / 회사명"
                />
              </div>
              <div>
                 <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Phone</label>
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black bg-transparent outline-none transition-colors placeholder-neutral-300"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black bg-transparent outline-none transition-colors placeholder-neutral-300"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Inquiry Type</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black bg-transparent outline-none cursor-pointer"
                >
                  <option value="설계문의">건축 설계 문의</option>
                  <option value="시공/턴키">시공 및 턴키 문의</option>
                  <option value="인허가/법규">인허가 및 법규 검토</option>
                  <option value="기타">기타 문의</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 focus:border-black focus:ring-0 outline-none transition-colors resize-none placeholder-neutral-400"
                placeholder="프로젝트의 위치, 용도, 규모 등 구체적인 내용을 적어주시면 더욱 정확한 상담이 가능합니다."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-5 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 mt-4 disabled:bg-neutral-400 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>전송 중...</span>
                </>
              ) : (
                <>
                  <span>문의하기</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium">{statusMessage}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium">{statusMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
