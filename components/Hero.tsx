export default function Hero() {
  return (
    <section className='pt-32 pb-20 px-4 container mx-auto'>
      <div className='max-w-6xl mx-auto text-center'>
        <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700/50 mb-8'>
          <span className='text-sm font-medium'>
            🚀 The Future of Tokenized Economy Starts Here
          </span>
        </div>

        <h1 className='text-5xl md:text-7xl font-bold mb-6'>
          <span className='hero-gradient'>tokens.hub</span>
        </h1>

        <p className='text-2xl md:text-3xl text-gray-300 mb-8'>
          Own the definitive platform name for the{' '}
          <span className='text-purple-400'>$2T+</span> token economy
        </p>

        <p className='text-xl text-gray-400 max-w-3xl mx-auto mb-12'>
          Your category-defining domain for token management, analytics, launch,
          and community. Position your brand as the central authority in Web3
          infrastructure.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <a
            href='#contact'
            className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25'
          >
            Make an Offer
          </a>
          <a
            href='#vision'
            className='px-8 py-4 border border-purple-500/50 rounded-full font-bold text-lg hover:bg-purple-500/10 transition'
          >
            Explore Vision
          </a>
        </div>

        {/* Domain badge */}
        <div className='mt-16 inline-flex items-center space-x-3 bg-black/50 border border-gray-800 rounded-2xl px-6 py-4'>
          <div className='pulse-ring w-3 h-3 rounded-full bg-green-500'></div>
          <div className='text-left'>
            <div className='font-mono text-xl'>tokens.hub</div>
            <div className='text-sm text-gray-400'>
              Premium Domain • .hub TLD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
