import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './components/Header'
import AllNews from './components/ALLNews'
import Footer from './components/Footer'
import CountryNews from './components/CountryNews'
import TopHeadline from './components/TopHeadline'
function App() {


  return (

    <BrowserRouter>
    <Headers />
    <Routes>
      <Route path="/" element={<AllNews />} />
      <Route path="/top-headlines/:category" element={<TopHeadline />} />
      <Route path="/country/:iso" element={<CountryNews />} />
    </Routes>
    <Footer/>
  </BrowserRouter>


  )
}

export default App
