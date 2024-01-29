import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Welcome to our blogs!"
    description="'Cashless Everywhere' facility: How to use it & its benefits."
  >
    <VerticalFeatureRow
      title="Cashless Everywhere"
      description="'Cashless Everywhere' facility for Health Insurance Explained: How to use it & its benefits."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
      href="https://bfsi.economictimes.indiatimes.com/news/insurance/cashless-everywhere-facility-for-health-insurance-explained-how-to-use-it-its-benefits/107151107"
    />
    <VerticalFeatureRow
      title="Initiative Revolutionizes"
      description="Initiative Revolutionizes Health Insurance: Avail Cashless Treatment At Any Hospital."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      href="https://www.mypunepulse.com/cashless-everywhere-initiative-revolutionizes-health-insurance-avail-cashless-treatment-at-any-hospital/"
    />
    <VerticalFeatureRow
      title="GAC initiative"
      description="GAC initiative guarantees cashless treatment across all hospitals"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      href="https://www.onmanorama.com/lifestyle/health/2024/01/26/gac-initiative-general-insurance-council-cashless-everywhere.html"
    />
    <VerticalFeatureRow
      title="Press Release"
      description="Press Release Launch of “CASHLESS EVERYWHERE” by General Insurance Council"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
      href="https://www.gicouncil.in/news-media/events/press-release-launch-of-cashless-everywhere/"
    />
    <VerticalFeatureRow
      title="Health insurance rule change"
      description="Cashless treatment at any hospital from today; how to get it, charges"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      href="https://economictimes.indiatimes.com/wealth/insure/health-insurance/health-insurance-rule-change-cashless-treatment-at-any-hospital-how-to-get-it/articleshow/107124089.cms?from=mdr"
    />
  </Section>
);

export { VerticalFeatures };
