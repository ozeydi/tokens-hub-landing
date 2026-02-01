export default function UseCases() {
  const useCases = [
    {
      title: 'Token Management Dashboard',
      description:
        'Centralized control panel for DeFi positions, staking, and governance',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Token Analytics Platform',
      description:
        'Real-time insights, whale tracking, and market intelligence',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Token Launchpad & Incubator',
      description: "The 'Product Hunt' for new token launches",
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Cross-Chain Token Bridge',
      description: 'Seamless token transfers between blockchain networks',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tokenized Asset Marketplace',
      description: 'Trading hub for RWAs, NFTs, and synthetic assets',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Token Community & Social Hub',
      description: 'Discussion, governance, and collaboration platform',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section id='use-cases' className='py-20 px-4 container mx-auto'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Transformative{' '}
            <span className='text-purple-400'>Business Applications</span>
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            This domain perfectly fits multiple billion-dollar business models
            in the Web3 space.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition group hover:scale-[1.02]'
            >
              <div className='flex items-start space-x-4'>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className='text-xl'>{index + 1}</span>
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>{useCase.title}</h3>
                  <p className='text-gray-400 text-sm'>{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
