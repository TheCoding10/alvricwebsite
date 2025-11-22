import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">About Alvric</h1>
            <p className="text-2xl text-gray-600 max-w-3xl">
              A forward-thinking software development agency building tomorrow's digital solutions today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded on the belief that great software changes the world, Alvric Technologies has been at the forefront of digital innovation for over 15 years. We started with a simple mission: build exceptional software that solves real problems for real businesses.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Today, we're a team of 150+ talented developers, designers, and strategists working on everything from custom web applications to AI-powered automation systems. We've delivered over 500 projects across industries, from startups to Fortune 500 companies.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Beyond our client work, Alvric is also a parent company for new software ventures, incubating innovative ideas and bringing them to market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-4">500+</div>
                <p className="text-gray-600 font-semibold">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Excellence',
                description: 'We pursue perfection in every project, from code quality to user experience. Our standards are uncompromising.',
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.',
              },
              {
                title: 'Partnership',
                description: 'Your success is our success. We work as an extension of your team, deeply invested in achieving your goals.',
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency and honesty. You can trust us to deliver what we promise, every time.',
              },
              {
                title: 'Impact',
                description: 'We measure success by the impact our work has on your business. Results matter more than process.',
              },
              {
                title: 'Growth',
                description: 'We invest in our team, our technology, and our clients. Continuous improvement is embedded in our DNA.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Our Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes', 'Next.js', 'Vue.js', 'GraphQL', 'MongoDB'].map((tech) => (
                  <div key={tech} className="bg-white p-4 rounded-lg border border-gray-200 text-center font-semibold text-gray-700">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries</h3>
              <div className="space-y-3">
                {['FinTech & Banking', 'SaaS & Cloud', 'E-commerce', 'Healthcare & MedTech', 'Real Estate & Construction', 'AI & Machine Learning'].map((industry) => (
                  <div key={industry} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96"></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Complete Digital Solutions</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From initial concept through deployment and beyond, we handle every aspect of software development. Whether you need a custom web application, a mobile app, AI automation, or complex integrations, our team has the expertise to deliver.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We combine strategic thinking with technical excellence to create solutions that are beautiful, scalable, and built to last.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all group"
              >
                Explore Our Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's discuss how Alvric can help transform your business.</p>
          <Link
            to="/contact"
            className="inline-block group bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Get In Touch
            <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
