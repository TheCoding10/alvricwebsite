import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Garcia-Peña General Contracting',
    category: 'Construction Management',
    description: 'Enterprise project management platform for tracking construction projects across multiple locations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Cloud'],
  },
  {
    id: 2,
    title: "God's Voice Ministries",
    category: 'Faith & Community',
    description: 'Digital platform for church management, member engagement, and event scheduling.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Firebase', 'Stripe'],
  },
  {
    id: 3,
    title: 'Landscaping Company Project',
    category: 'Service Management',
    description: 'Mobile-first scheduling and invoicing system for landscaping service providers.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['React Native', 'TypeScript', 'AWS'],
  },
  {
    id: 4,
    title: 'MemoLearning Platform',
    category: 'EdTech SaaS',
    description: 'Intelligent learning platform with AI-powered personalized education paths.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['Python', 'Machine Learning', 'React'],
  },
  {
    id: 5,
    title: 'FinTech Dashboard',
    category: 'Financial Technology',
    description: 'Real-time analytics and trading dashboard for cryptocurrency and stock portfolio management.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'GraphQL', 'WebSocket'],
  },
  {
    id: 6,
    title: 'Healthcare AI System',
    category: 'Medical Technology',
    description: 'AI-powered diagnostic system integrated with EHR platforms for medical centers.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['Python', 'TensorFlow', 'Docker'],
  },
];

export function PortfolioPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Showcasing the innovative projects we've delivered across industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white hover:border-gray-900"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <span className="text-sm text-gray-600 font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all group">
                    View Project
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
            <p className="text-xl text-gray-600">Real results from real projects</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Delivered', value: '500+' },
              { label: 'Happy Clients', value: '200+' },
              { label: 'Team Members', value: '150+' },
              { label: 'Years of Experience', value: '15+' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Industries We Serve</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'FinTech & Banking',
              'Healthcare & MedTech',
              'E-commerce',
              'SaaS & Cloud',
              'Real Estate',
              'Manufacturing',
              'Construction',
              'Education',
              'Media & Entertainment',
            ].map((industry) => (
              <div key={industry} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-900 transition-colors text-center">
                <p className="font-semibold text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Add Your Project to Our Portfolio?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's create something exceptional together.</p>
          <Link
            to="/contact"
            className="inline-block group bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Start Your Project
            <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
