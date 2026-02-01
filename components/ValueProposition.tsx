export default function ValueProposition() {
  const metrics = [
    {
      label: 'Global TLD',
      value: '.hub',
      description: 'Recognized by GitHub, ProductHunt, TechCrunch',
    },
    {
      label: 'Character Length',
      value: '10',
      description: 'Short, memorable, brandable',
    },
    {
      label: 'Industry',
      value: 'Web3/Crypto',
      description: '$2T+ market potential',
    },
    {
      label: 'Search Volume',
      value: 'High',
      description: 'Tokens = 823K monthly searches',
    },
  ];

  return (
    <section id='value' className='py-20 px-4 container mx-auto'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl md:text-5xl font-bold mb-8'>
              Why <span className='text-purple-400'>tokens.hub</span> is
              Exceptional
            </h2>

            <ul className='space-y-6'>
              <li className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1'>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
                <div>
                  <h4 className='text-xl font-bold mb-2'>Category-Defining</h4>
                  <p className='text-gray-400'>
                    Owns the mental space for token infrastructure
                  </p>
                </div>
              </li>

              <li className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1'>
                  <div className='w-3 h-3 rounded-full bg-blue-500'></div>
                </div>
                <div>
                  <h4 className='text-xl font-bold mb-2'>
                    Instant Credibility
                  </h4>
                  <p className='text-gray-400'>
                    Establishes authority in the Web3 space immediately
                  </p>
                </div>
              </li>

              <li className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1'>
                  <div className='w-3 h-3 rounded-full bg-purple-500'></div>
                </div>
                <div>
                  <h4 className='text-xl font-bold mb-2'>
                    Marketing Advantage
                  </h4>
                  <p className='text-gray-400'>
                    Saves millions in branding and marketing efforts
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-3xl p-8'>
            <h3 className='text-2xl font-bold mb-8 text-center'>
              Domain Metrics
            </h3>

            <div className='space-y-6'>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center pb-6 border-b border-gray-800 last:border-0'
                >
                  <div>
                    <div className='text-sm text-gray-400'>{metric.label}</div>
                    <div className='text-2xl font-bold'>{metric.value}</div>
                  </div>
                  <div className='text-right text-sm text-gray-400 max-w-[200px]'>
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl'>
              <div className='text-center'>
                <div className='text-sm text-gray-400 mb-2'>
                  Comparable Sales
                </div>
                <div className='text-2xl font-bold'>$500K - $2M+</div>
                <div className='text-sm text-gray-400 mt-2'>
                  Based on recent premium domain sales
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
