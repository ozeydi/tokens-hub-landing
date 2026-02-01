'use client';

import { useState } from 'react';

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: "I'm interested in tokens.hub. Please provide more information.",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        message:
          "I'm interested in tokens.hub. Please provide more information.",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id='contact' className='py-20 px-4 container mx-auto'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Own This <span className='text-purple-400'>Category-Defining</span>{' '}
            Asset
          </h2>
          <p className='text-xl text-gray-400'>
            Serious inquiries only. Contact us to discuss acquisition terms.
          </p>
        </div>

        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='lg:col-span-2 bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-3xl p-8'>
            <h3 className='text-2xl font-bold mb-6'>Why Act Now?</h3>
            <ul className='space-y-4'>
              <li className='flex items-center space-x-3'>
                <div className='w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-green-500'></div>
                </div>
                <span>Premium domains appreciate over time</span>
              </li>
              <li className='flex items-center space-x-3'>
                <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                </div>
                <span>Limited availability of .hub domains</span>
              </li>
              <li className='flex items-center space-x-3'>
                <div className='w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-purple-500'></div>
                </div>
                <span>Multiple interested parties expected</span>
              </li>
              <li className='flex items-center space-x-3'>
                <div className='w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-orange-500'></div>
                </div>
                <span>Exclusive ownership rights</span>
              </li>
            </ul>

            <div className='mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-transparent rounded-xl'>
              <div className='text-sm text-gray-400 mb-2'>Current Status</div>
              <div className='flex items-center justify-between'>
                <div className='font-bold'>Available for Acquisition</div>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
                  <span className='text-sm text-green-500'>Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-3 bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-3xl p-8'>
            {submitted ? (
              <div className='text-center py-12'>
                <div className='w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6'>
                  <svg
                    className='w-10 h-10 text-green-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold mb-4'>Inquiry Sent!</h3>
                <p className='text-gray-400'>
                  We'll contact you within 24 hours to discuss the acquisition
                  process.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className='w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 transition'
                      placeholder='John Smith'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className='w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 transition'
                      placeholder='john@company.com'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>
                    Company / Project
                  </label>
                  <input
                    type='text'
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className='w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 transition'
                    placeholder='Your Web3 company name'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>
                    Your Interest
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className='w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 transition resize-none'
                    placeholder='Tell us about your plans for tokens.hub'
                  />
                </div>

                <div className='pt-4'>
                  <button
                    type='submit'
                    className='w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition'
                  >
                    Submit Serious Inquiry
                  </button>
                  <p className='text-center text-sm text-gray-400 mt-4'>
                    All inquiries are confidential. We use secure escrow for
                    transactions.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
