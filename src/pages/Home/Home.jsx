import React from 'react';
import './Home.css'
import Header from '../../components/organisms/Header/Header';
import HighlightSection from '../../components/templates/HighlightSection';
import FeatureSection from '../../components/templates/FeatureSection';
// import ContactSection from './components/ContactSection';
import Footer from '../../components/organisms/Footer/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className='content'>
        <HighlightSection />
        <FeatureSection />
        {/* <ContactSection /> */}        
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;