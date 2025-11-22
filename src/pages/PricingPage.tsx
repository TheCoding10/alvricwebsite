import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Starter',
    subtitle: 'Perfect for small projects',
    price: 15000,
    description: 'Ideal for MVPs and smaller web applications',
    features: [
      'Up to 3 months of development',
      'React/Vue frontend',
      'Node.js/Python backend',
      'Database design & setup',
      'Basic UI/UX design',
      'Deployment to cloud',
      'Basic documentation',
      '1 month post-launch support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    subtitle: 'Most popular',
    price: 50000,
    description: 'Comprehensive solution for growing businesses',
    features: [
      'Up to 4-6 months of development',
      'Advanced frontend architecture',
      'Scalable backend systems',
      'Database optimization',
      'Professional UI/UX design',
      'Third-party integrations',
      'API development',
      'Comprehensive documentation',
      'Advanced security features',
      '3 months post-launch support',
      'Performance optimization',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For large-scale projects',
    price: null,
    priceText: 'Custom',
    description: 'Custom solution tailored to your complex needs',
    features: [
      'Unlimited development time',
      'Complex system architecture',
      'AI/ML integration',
      'Advanced database solutions',
      'Enterprise security',
      'Custom integrations',
      'Dedicated team',
      'Comprehensive testing suite',
      ' 24/7 monitoring',
      '12 months post-launch support',
      'Continuous optimization',
      'Training & knowledge transfer',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const features = [
  {
    title: 'Agile Development',
    description: 'Flexible methodology with regular sprints and feedback cycles',
  },
  {
    title: 'Modern Stack',
    description: 'Latest technologies and best practices for optimal performance',
  },
  {
    title: 'Scalability',
    description: 'Built with growth in mind, easily scales as your business expands',
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security and compliance standards',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing at every stage of development',
  },
  {
    title: 'Post-Launch Support',
    description: 'Ongoing maintenance and optimization after deployment',
  },
];

export function PricingPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Flexible packages designed to fit businesses of all sizes
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-gray-900 bg-white shadow-2xl md:scale-105'
                    : 'border-gray-200 bg-white hover:shadow-lg'
                } p-8`}
              >
                {tier.highlighted && (
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gray-900 text-white rounded-full text-sm font-semibold">
                      {tier.subtitle}
                    </span>
                  </div>
                )}

                <h3 className="text-3xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <div className="mb-8">
                  {tier.priceText ? (
                    <div className="text-4xl font-bold text-gray-900">{tier.priceText}</div>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-gray-900">
                        ${tier.price?.toLocaleString()}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Starting price</p>
                    </>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                    tier.highlighted
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </button>

                <div className="space-y-4">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">What's Included</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-xl text-gray-600">Common questions about our pricing</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I customize a pricing tier?',
                a: 'Yes! All our packages are flexible. We can customize any tier to match your specific requirements and budget.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Absolutely. We offer flexible payment options including installment plans throughout the development cycle.',
              },
              {
                q: 'What if my project goes over budget?',
                a: 'We work aggressively to stay within budget through careful planning and transparent communication. Any overages are discussed upfront.',
              },
              {
                q: 'Is support included after launch?',
                a: 'Yes! All packages include post-launch support. Additional support packages are available for ongoing maintenance.',
              },
              {
                q: 'Do you offer discounts for long-term partnerships?',
                a: 'We do! We offer special rates for ongoing maintenance and support contracts. Let\'s discuss your specific needs.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Still have questions?</h2>
          <p className="text-xl text-gray-300 mb-10">Our team is ready to discuss the perfect solution for your project and budget.</p>
          <Link
            to="/contact"
            className="inline-block group bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
          >
            Schedule a Call
            <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
