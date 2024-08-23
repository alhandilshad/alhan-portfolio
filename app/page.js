import About from '@/components/About';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
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
    </>
  )
}

export default page;