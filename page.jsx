'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Crown, Leaf, Sparkles, ShieldCheck, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: .75, ease: 'easeOut' } }
};

const notes = [
  ['Top Notes', 'Bergamot · Pink Pepper · Saffron'],
  ['Heart Notes', 'Frankincense · Cedar · Iris'],
  ['Base Notes', 'Amber · Sandalwood · Musk']
];

export default function Home() {
  return (
    <main className="min-h-screen bg-blackGold text-milk">
      <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-xl font-bold tracking-tight gold-text">happy people</a>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#story">Story</a><a href="#notes">Notes</a><a href="#buy">Buy</a><a href="#faq">FAQ</a>
          </nav>
          <a href="#buy" className="rounded-full border border-gold/50 px-5 py-2 text-sm font-semibold text-lightGold hover:bg-gold hover:text-black">Order Now</a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
        <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 34, ease: 'linear' }} className="absolute -right-48 top-20 h-[420px] w-[420px] rounded-full border border-gold/20" />
        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 46, ease: 'linear' }} className="absolute -left-48 bottom-10 h-[380px] w-[380px] rounded-full border border-gold/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="mb-4 text-sm uppercase tracking-[.45em] text-gold">Happy People Fragrance</p>
            <h1 className="font-display text-7xl font-bold leading-none md:text-8xl"><span className="gold-text">YELEY</span></h1>
            <h2 className="mt-5 font-serif text-3xl text-white/90 md:text-5xl">The Fragrance of Purpose</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">A premium fragrance inspired by biblical anointing oil — created as a reminder that every person has a God-given mission.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#buy" className="group rounded-full bg-gold px-8 py-4 font-bold text-black transition hover:bg-lightGold">Buy Now <ChevronRight className="inline h-5 w-5 transition group-hover:translate-x-1" /></a>
              <a href="#story" className="rounded-full border border-white/20 px-8 py-4 font-bold text-white hover:border-gold/70">Discover the Story</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, scale:.92 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1 }} className="relative">
            <div className="absolute inset-6 rounded-[2rem] bg-gold/20 blur-3xl" />
            <Image src="/yeley-product.jpeg" width={1200} height={1200} alt="Happy People YELEY perfume" className="relative rounded-[2rem] border border-gold/20 glow" priority />
          </motion.div>
        </div>
      </section>

      <section id="story" className="px-5 py-28">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[.4em] text-gold">More than perfume</p>
          <h2 className="mt-5 font-display text-5xl font-bold md:text-7xl">Luxury with <span className="gold-text">meaning</span></h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/68">YELEY was born from the message of Happy People: true happiness begins when a person discovers and lives the mission God placed inside them. This fragrance carries the atmosphere of calling, faith, identity and purpose.</p>
        </motion.div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[['Inspired by Scripture', Sparkles], ['Premium Feel', Crown], ['Modern Luxury', ShieldCheck], ['Deep Warm Notes', Leaf]].map(([title, Icon]) => (
            <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="lux-card rounded-3xl p-7 transition hover:-translate-y-1 hover:border-gold/60">
              <Icon className="mb-8 h-9 w-9 text-gold" />
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-white/60">A clean premium presentation built around faith, purpose and unforgettable presence.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="notes" className="px-5 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}>
            <p className="text-sm uppercase tracking-[.4em] text-gold">Fragrance Notes</p>
            <h2 className="mt-5 font-display text-5xl font-bold md:text-6xl">Warm. Deep. <span className="gold-text">Purposeful.</span></h2>
            <p className="mt-6 text-lg leading-8 text-white/65">A bold unisex scent with bright opening notes, sacred resin warmth, and a rich amber-woody base.</p>
          </motion.div>
          <div className="space-y-4">
            {notes.map(([name, text]) => <div key={name} className="lux-card rounded-3xl p-7"><h3 className="font-display text-2xl text-lightGold">{name}</h3><p className="mt-2 text-white/68">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 text-center">
        <div className="mx-auto max-w-6xl border-y border-gold/20 py-20">
          <p className="font-serif text-5xl leading-tight text-white/90 md:text-7xl">Purpose · Presence · Faith · Calling · Identity</p>
        </div>
      </section>

      <section id="buy" className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] border border-gold/30 bg-white/[.04] md:grid-cols-2">
          <div className="relative min-h-[420px]"><Image src="/yeley-product.jpeg" fill alt="YELEY box and bottle" className="object-cover" /></div>
          <div className="p-9 md:p-14">
            <p className="text-sm uppercase tracking-[.4em] text-gold">Limited Edition</p>
            <h2 className="mt-4 font-display text-6xl font-bold gold-text">YELEY</h2>
            <p className="mt-3 text-white/70">Happy People Eau de Parfum · 50 ml</p>
            <div className="my-8 flex gap-1 text-gold">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-5 w-5 fill-current" />)}</div>
            <p className="text-4xl font-bold">$99</p>
            <p className="mt-5 leading-8 text-white/62">Order the first fragrance by Happy People. Premium black and gold packaging. Built for people who carry purpose.</p>
            <a href="mailto:happypeoplemission@gmail.com?subject=Order YELEY Perfume" className="mt-9 inline-block w-full rounded-full bg-gold px-8 py-4 text-center font-bold text-black hover:bg-lightGold">Order by Email</a>
            <p className="mt-4 text-sm text-white/45">Later you can replace this button with Stripe, Shopify, PayPal or Vercel checkout.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 pb-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-display text-5xl font-bold">FAQ</h2>
          {['Is YELEY unisex?', 'How can I order?', 'Can this website connect to Stripe?', 'Where can I change the price?'].map((q, i) => (
            <details key={q} className="mb-4 rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <summary className="cursor-pointer font-bold text-lightGold">{q}</summary>
              <p className="mt-4 text-white/62">{i===0?'Yes, YELEY is designed as a bold unisex fragrance.':i===1?'Click Order by Email, or connect Stripe/Shopify later for instant checkout.':i===2?'Yes. This Next.js site is ready for Stripe, Shopify Buy Button, PayPal or any checkout link.':'Open app/page.jsx and change the price in the Buy section.'}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-white/45">
        <p className="font-display text-2xl gold-text">happy people</p>
        <p className="mt-3">Every person was created for a purpose. Ephesians 2:10</p>
      </footer>
    </main>
  );
}
