import SectionSvg from '../assets/svg/SectionSvg';

const Section = ({
  className,
  id,
  customPaddings,
  children,
}) => (
  <div
    id={id}
    style={{
      backgroundImage: `url('/src/assets/bg-gradient.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20`} ${className || ""}`}
  >
    {children}
  </div>
);

export default Section;


