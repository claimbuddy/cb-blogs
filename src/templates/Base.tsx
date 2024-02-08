import React, { useEffect } from 'react';

import { Meta } from '../layout/Meta';
import { initGA, logPageView } from '../utils/analytics'; // Import the utility you created
import { AppConfig } from '../utils/AppConfig';
import { Banner, CalendlyWidget } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  useEffect(() => {
    // This function will be called when the component mounts
    console.log('Component mounted!');
    initGA();
    logPageView();
    // You can perform any side effect here
    // Remember to handle cleanup if needed

    return () => {
      // This function will be called when the component unmounts
      console.log('Component unmounted!');
      // Perform cleanup here if needed
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      {/* NewsArticle about Cashless - NewsSection */}
      {/* BlogsSection */}
      {/* AdSection */}
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <Banner />
        </div>
        <div className="mx-4">Or</div>
        <div className="w-1/2">
          <CalendlyWidget />
        </div>
      </div>
      {/* CalendlyContactFormSection */}
      {/* Left Right */}
      <Footer />
      {/* LeftFooter, LeftFooter */}
    </div>
  );
};

export { Base };
