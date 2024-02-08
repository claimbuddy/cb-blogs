import React, { useEffect, useState } from 'react';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Name:', name);
    console.log('Phone:', phone);
  };

  return (
    <Section>
      <CTABanner
        title="Request Callback"
        button={
          <div className="sm:flex-column flex flex-col">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="mb-3 rounded-md border border-gray-300 px-6 py-4 focus:border-primary-400 focus:outline-none sm:mb-3"
            />
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Your Phone Number"
              className="mb-3 rounded-md border border-gray-300 px-6 py-4 focus:border-primary-400 focus:outline-none sm:mb-3"
            />
            <Button onClick={handleRegister}>Register</Button>
          </div>
        }
      />
    </Section>
  );
};

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up: remove Calendly widget script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/block-calender-cashless-everywhere/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=d8373f"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export { CalendlyWidget };
export { Banner };
