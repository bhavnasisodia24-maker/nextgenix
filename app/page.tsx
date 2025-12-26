import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import Contact from '@/components/home/Contact';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />

      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 relative z-10">
              Ready to <span className="text-primary">Upgrade?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto relative z-10">
              Join the forward-thinking brands that are already defining the future with NextGenix.
            </p>
            <div className="relative z-10">
              <Link href="/#contact">
                <Button size="lg" className="h-16 px-12 text-lg shadow-[0_0_40px_rgba(0,242,255,0.3)] hover:shadow-[0_0_60px_rgba(0,242,255,0.5)]">
                  Start Your Transformation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
