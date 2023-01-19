import React from 'react'
import Header from './components/Header'
import HeroImage from './components/HeroImage'
import NavBar from './components/NavBar'
import PreviewCard from './components/PreviewCard'
import './style.css'

const App = () => {
  return (
    <>
      <body>
        <NavBar />
        <HeroImage />
        <div class="container">
          <Header />
          <div class="row g-3">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
      </body>
      <hr></hr>
      <footer>
            <div class="row m-1">
                <div class="col-md-6">
                    <p>Copyright © 2023 Traveler's Forum</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-dark">Terms of Use</a>
                    <span class="text-muted mx-2">|</span>
                    <a href="#" class="text-dark">Privacy Policy</a>
                    <span class="text-muted mx-2">|</span>
                    <a href="#" class="text-dark">Contact</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default App