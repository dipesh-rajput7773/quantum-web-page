import React from 'react'
import NavBar from './NavBar';
import TopNav from './TopNav';
import HeroSection from './HeroSection';
import VideoSec from './VideoSec';
import Services from './Services';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';




function App() {
  return (
<>

<TopNav />
<NavBar />

<HeroSection />
<VideoSec />
<Services />
<Footer />
</>
  )
}

export default App