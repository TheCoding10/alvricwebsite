import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'hello@alvrictechnologies.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+1 (401) 489-9230',
              },
              {
                icon: MapPin,
                label: 'Office',
                value: 'San Francisco, CA',
              },
            ].map((contact, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
                <contact.icon className="w-8 h-8 text-gray-900 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.label}</h3>
                <p className="text-gray-600">{contact.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Schedule a Discovery Call</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Not sure where to start? Schedule a free 30-minute discovery call with one of our senior consultants. We'll discuss your project, goals, and how Alvric can help bring your vision to life.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Free Consultation', desc: 'No strings attached, no sales pitch' },
                  { title: 'Expert Guidance', desc: 'Talk with experienced developers' },
                  { title: 'Custom Roadmap', desc: 'We\'ll outline a path forward' },
                  { title: 'No Obligation', desc: 'Take your time to decide' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-all font-semibold">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'How soon can you start my project?',
                a: 'We typically begin within 1-2 weeks. Our team will work with you to establish a timeline that works best for your needs.',
              },
              {
                q: 'What is your communication style?',
                a: 'We believe in transparent, regular communication. Weekly sprints, daily standups, and regular check-ins keep everyone aligned.',
              },
              {
                q: 'Do you work with startups?',
                a: 'Absolutely! We love working with startups and can offer flexible engagement models including milestone-based payments.',
              },
              {
                q: 'What if I want to maintain the code myself?',
                a: 'We provide comprehensive documentation and knowledge transfer sessions to ensure your team can maintain the codebase.',
              },
              {
                q: 'How do you handle scope changes?',
                a: 'We use agile methodology, which means scope can be adjusted. We maintain transparency about how changes affect timeline and budget.',
              },
              {
                q: 'What happens after launch?',
                a: 'We offer ongoing support packages including maintenance, monitoring, and optimization to keep your application running smoothly.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Looking for something else?</h2>
          <p className="text-xl text-gray-300 mb-10">Check out our services and portfolio to see what we can do for you.</p>
        </div>
      </section>
    </div>
  );
}
