import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://claimbuddy.in/">About us</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern blogs by ClaimBuddy for\n'}
            <span className="text-primary-500">Claiming Cashless Policies</span>
          </>
        }
        description="Solutions and Information for cashless claims"
        button={
          <Link href="#">
            <Button xl>Start Reading Now</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
