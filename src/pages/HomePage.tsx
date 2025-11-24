import { ArrowRight, Zap, Shield, TrendingUp, Users, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Bespoke applications built from the ground up to solve your unique business challenges.'
  },
  {
    icon: Zap,
    title: 'AI & Automation Systems',
    description: 'Intelligent automation solutions powered by cutting-edge AI technologies.'
  },
  {
    icon: TrendingUp,
    title: 'Front-end & Back-end',
    description: 'Modern, scalable architectures with beautiful, responsive interfaces.'
  },
  {
    icon: Globe,
    title: 'App Development',
    description: 'Native and cross-platform mobile and web applications for every platform.'
  },
  {
    icon: Shield,
    title: 'UI/UX Design',
    description: 'Stunning, intuitive interfaces that users love and engage with daily.'
  },
  {
    icon: Users,
    title: 'Cloud & Integrations',
    description: 'Seamless cloud deployments and third-party integrations for your systems.'
  },
];

const testimonials = [
  {
    name: 'James Green',
    company: 'Door Deluxe LLC',
    quote: 'The AI automation solution they built cut our processing time by 80%. Professional, efficient, and results-driven.',
    image: 'https://i.imgur.com/bBM3ZnP.jpg',
  },
  {
    name: 'Alexander Garcia',
    company: 'Garcia & Pena General Contracting',
    quote: 'Alvric delivered an exceptional custom platform that transformed our business operations. Their team is incredibly talented and responsive.',
    image: 'https://i.imgur.com/VjflLJp.jpeg',
  },
  {
    name: 'Carlos Ramirez',
    company: 'Gods Voice Ministries',
    quote: 'Best investment in technology we ever made. Alvric went above and beyond our expectations on every front.',
    image: 'https://i.imgur.com/ic3joNd.jpg',
  },
];

export function HomePage() {
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fadeInUp mb-8">
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              Alvric Technologies
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight animate-fadeInUp">
            Transforming Ideas into{' '}
            <span className="gradient-text">Powerful Software</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-slideInLeft">
            Alvric Technologies builds modern, scalable, and high-performance digital products for businesses and startups that dare to innovate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-slideInRight">
            <Link
              to="/contact"
              className="group bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl"
            >
              Book a Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-900 hover:border-gray-900 hover:bg-gray-50 transition-all font-semibold"
            >
              Explore Services
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600 text-sm">Projects Delivered</div>
            </div>
            <div className="border-x border-gray-200">
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600 text-sm">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions across the entire development spectrum</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 bg-white hover:bg-gray-50"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                  <service.icon className="text-gray-900 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Choose Alvric</h2>
            <p className="text-xl text-gray-600">The partnership that drives your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { label: 'Expert Team', value: 'World-class developers and designers' },
              { label: 'Innovation First', value: 'Cutting-edge technologies and methodologies' },
              { label: 'Proven Track Record', value: '20+ successful projects delivered' },
              { label: '24/7 Support', value: 'Dedicated support throughout your journey' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="font-semibold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-600 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Trusted by Business Owners</h2>
            <p className="text-xl text-gray-600">See what our clients say about working with Alvric</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's transform your vision into reality</p>
          <Link
            to="/contact"
            className="inline-block group bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            Schedule Your Consultation
            <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
