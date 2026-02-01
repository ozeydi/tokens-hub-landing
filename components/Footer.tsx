export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-8 px-4 container mx-auto border-t border-gray-800'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2 mb-4 md:mb-0'>
            <div className='w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
              <span className='font-bold text-sm'>TH</span>
            </div>
            <span className='text-xl font-bold'>tokens.hub</span>
          </div>

          <div className='text-center text-gray-400 mb-4 md:mb-0'>
            Premium Web3 Domain • For Acquisition • Serious Inquiries Only
          </div>

          <div className='text-gray-500 text-sm'>
            © {currentYear} tokens.hub • All rights reserved
          </div>
        </div>

        <div className='text-center mt-8 pt-8 border-t border-gray-800'>
          <p className='text-gray-500 text-sm'>
            Note: This is a domain landing page. Domain ownership will be
            transferred via secure escrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
