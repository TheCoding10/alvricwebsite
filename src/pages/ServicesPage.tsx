import { ArrowRight, Code, Zap, TrendingUp, Globe, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesDetail = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Bespoke applications built from the ground up to solve your unique challenges.',
    features: [
      'End-to-end custom development',
      'Enterprise-grade scalability',
      'Modern architecture patterns',
      'Rigorous testing & QA',
    ],
    cta: 'Start Your Project',
  },
  {
    icon: Zap,
    title: 'AI & Automation Systems',
    description: 'Leverage artificial intelligence to automate workflows and gain competitive advantage.',
    features: [
      'Machine learning solutions',
      'Process automation',
      'Predictive analytics',
      'Natural language processing',
    ],
    cta: 'Explore AI Solutions',
  },
  {
    icon: TrendingUp,
    title: 'Front-end & Back-end Development',
    description: 'Modern, scalable architectures with beautiful, responsive interfaces.',
    features: [
      'React, Vue, Angular expertise',
      'Node.js, Python, Java backends',
      'RESTful & GraphQL APIs',
      'Database design & optimization',
    ],
    cta: 'Build With Us',
  },
  {
    icon: Globe,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'React Native development',
      'Native iOS & Android apps',
      'Cross-platform solutions',
      'App store deployment',
    ],
    cta: 'Develop Your App',
  },
  {
    icon: Shield,
    title: 'UI/UX Design',
    description: 'Stunning, intuitive interfaces that users love and engage with daily.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Usability testing',
    ],
    cta: 'Design Your Vision',
  },
  {
    icon: Users,
    title: 'Cloud & Integrations',
    description: 'Seamless cloud deployments and third-party integrations for your systems.',
    features: [
      'AWS, Google Cloud, Azure',
      'CI/CD pipelines',
      'API integrations',
      'Infrastructure automation',
    ],
    cta: 'Scale to the Cloud',
  },
];

export function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {servicesDetail.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div>
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-gray-900" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold group">
                    {service.cta}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <service.icon size={64} className="mx-auto mb-4 opacity-30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">Proven methodology ensuring excellence at every stage</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We dive deep into understanding your business objectives and challenges.',
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Our designers create intuitive interfaces and interactive prototypes.',
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Skilled developers build and rigorously test your solution.',
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'Seamless deployment with 24/7 support and continuous optimization.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-gray-900 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: 'Frontend', techs: ['React', 'Vue.js', 'Next.js', 'TypeScript'] },
              { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'Go'] },
              { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
              { category: 'Cloud & DevOps', techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
            ].map((group, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.techs.map((tech) => (
                    <div key={tech} className="text-gray-600 text-sm">{tech}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's discuss which services are right for your project.</p>
          <Link
            to="/contact"
            className="inline-block group bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
