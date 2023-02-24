import { CirclesWithBar } from 'react-loader-spinner';

export const Preloader = () => {
  return (
    <CirclesWithBar
      height="300"
      width="300"
      color="#616157"
      // color="#4fa94d"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
};
