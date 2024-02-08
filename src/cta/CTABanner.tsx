import type { ReactNode } from 'react';

type ICTABannerProps = {
  button: ReactNode;
  title: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div
    className="flex flex-col rounded-md p-20 text-center sm:items-center sm:justify-between sm:p-12 sm:text-left"
    style={{ padding: '190px' }}
  >
    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem', padding: '64px' }}>
        {props.title}
      </span>
      {props.button}
    </div>
  </div>
);

export { CTABanner };
