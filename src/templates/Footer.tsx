import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <Link href="https://www.facebook.com/claimbuddy.in/">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
              </svg>
            </Link>

            <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fclaimbuddyi">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
            </Link>

            <Link href="https://in.linkedin.com/company/claimbuddy-in">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>

            <Link href="https://www.instagram.com/claimbuddy.in/?hl=en">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2834.65"
                height="2834.649"
                viewBox="49.605 0 2834.65 2834.649"
                id="instagram"
              >
                <circle
                  cx="1466.93"
                  cy="1417.324"
                  r="1417.324"
                  fill="#A0AEC0"
                ></circle>
                <path
                  fill="#fff"
                  d="M1892.128 726.379h-850.395c-147.639 0-265.749 118.11-265.749 265.749v850.394c0 147.639 118.11 265.748 265.749 265.748h850.395c147.638 0 265.749-118.109 265.749-265.748V992.127c0-147.638-118.112-265.748-265.749-265.748zm76.772 159.449h29.527V1122.048h-236.221v-236.22H1968.9zm-696.851 389.765c41.338-59.056 118.11-100.395 194.882-100.395s153.544 41.339 194.882 100.395c29.527 41.338 47.244 88.582 47.244 141.732 0 135.826-112.205 242.126-242.126 242.126-129.922 0-242.126-106.299-242.126-242.126-.001-53.15 17.716-100.394 47.244-141.732zm750.001 566.929c0 70.867-59.056 129.922-129.922 129.922h-850.395c-70.866 0-129.922-59.055-129.922-129.922v-566.929h206.693c-17.717 41.338-29.527 94.488-29.527 141.732 0 206.693 171.26 377.953 377.953 377.953s377.953-171.26 377.953-377.953c0-47.244-11.812-100.395-29.527-141.732h206.692l.002 566.929z"
                ></path>
              </svg>
            </Link>
          </>
        }
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="https://claimbuddy.in/about.html">About</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
