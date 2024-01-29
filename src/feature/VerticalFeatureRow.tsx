import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'm-3',
    'flex-wrap',
    'grid-cols-1',
    'gap-1',
    'inline-grid',
    'border-2',
    'h-80',
    'w-full',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="p-6 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>

      <div className="w-64 text-left sm:w-1/2 sm:px-6">
        <h3 className="text-1xl font-semibold text-gray-900">{props.title}</h3>
        <div className="text-1xl mt-6 leading-9">{props.description}</div>
        <Link style={{ color: '#03A9F4' }} href="#">
          <button>Read Now</button>
        </Link>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
