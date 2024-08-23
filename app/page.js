import About from '@/components/About';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Services />
    <Skills />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default page;