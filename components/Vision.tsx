export default function Vision() {
  return (
    <section id='vision' className='py-20 px-4 container mx-auto'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            The <span className='text-purple-400'>Central Nervous System</span>{' '}
            for Tokens
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            This domain represents the foundational infrastructure for the next
            generation of tokenized applications, assets, and economies.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-gradient-to-b from-gray-900/50 to-black/50 p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition group'>
            <div className='w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-6'>
              <span className='text-2xl'>🌐</span>
            </div>
            <h3 className='text-2xl font-bold mb-4'>Multi-Chain Gateway</h3>
            <p className='text-gray-400'>
              Position as the universal interface for managing tokens across
              Ethereum, Solana, Polygon, and emerging Layer 2s.
            </p>
          </div>

          <div className='bg-gradient-to-b from-gray-900/50 to-black/50 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition group'>
            <div className='w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-6'>
              <span className='text-2xl'>📈</span>
            </div>
            <h3 className='text-2xl font-bold mb-4'>Analytics Powerhouse</h3>
            <p className='text-gray-400'>
              Become the go-to platform for token metrics, whale tracking,
              liquidity analysis, and market intelligence.
            </p>
          </div>

          <div className='bg-gradient-to-b from-gray-900/50 to-black/50 p-8 rounded-3xl border border-gray-800 hover:border-green-500/50 transition group'>
            <div className='w-14 h-14 rounded-xl bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-6'>
              <span className='text-2xl'>🚀</span>
            </div>
            <h3 className='text-2xl font-bold mb-4'>Launch Platform</h3>
            <p className='text-gray-400'>
              Transform into the premier launchpad for new tokens, combining
              discovery, community, and distribution in one hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
