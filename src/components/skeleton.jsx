import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={440}
    viewBox="0 0 280 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="-1" y="2" rx="0" ry="0" width="278" height="435" />
  </ContentLoader>
);

export default Skeleton;
