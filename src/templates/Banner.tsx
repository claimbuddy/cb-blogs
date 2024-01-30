import React, { useState } from 'react';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <Section>
      <CTABanner
        title="Subscribe and get daily update of cashless claim process."
        subtitle="Stay Tuned"
        button={
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email Address"
            />

            <Button>Subscribe</Button>
          </div>
        }
      />
    </Section>
  );
};

export { Banner };
