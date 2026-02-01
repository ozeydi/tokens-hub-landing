import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UseCases from '../components/UseCases';
import ValueProposition from '../components/ValueProposition';
import Vision from '../components/Vision';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden'>
      {/* Animated background particles */}
      <div className='fixed inset-0 token-grid opacity-20'></div>

      <div className='relative z-10'>
        <Header />
        <Hero />
        <Vision />
        <UseCases />
        <ValueProposition />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}
