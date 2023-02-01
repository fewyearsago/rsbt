import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={440}
    height={450}
    viewBox="0 0 440 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="181" y="104" rx="0" ry="0" width="1" height="0" />
    <rect x="1" y="2" rx="0" ry="0" width="447" height="450" />
  </ContentLoader>
);

export default Skeleton;
