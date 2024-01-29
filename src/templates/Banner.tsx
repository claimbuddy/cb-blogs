import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Subscribe and get daily update of cashless claim process"
      subtitle="Stay Tuned"
      button={
        <Link href="#">
          <Button>Subscribe</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
