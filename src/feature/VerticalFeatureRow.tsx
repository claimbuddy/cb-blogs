import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  href: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'm-3',
    'flex-auto',
    'grid-cols-1',
    'gap-1',
    'inline-grid',
    'border-2',
    'h-80',
    'w-max',
    'sm:w-max',
    'align-content',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-36 items-center p-6 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>

      <div className="w-66 w-full sm:w-1/2 sm:px-6">
        <h3 className="text-1xl w-48 font-semibold text-gray-900">
          {props.title}
        </h3>
        <div className="mt-5 w-64 text-left text-sm leading-9">
          {props.description}
        </div>
        <a style={{ color: '#03A9F4' }} href={props.href} target="_blank">
          Read Now
        </a>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
