import { Container } from '@mui/material';
import { GoBackBtn } from 'pages/MovieDetails/MovieDetails.styled';

const ErrorPage = () => {
  return (
    <Container>
      <br />
      <h2>Something goes wrong... Ceep calm & try one more time!</h2>
      <br />
      <GoBackBtn to="/">Back to safety!</GoBackBtn>
      <br />
      <br />

      <img
        src="https://www.sltrib.com/resizer/58dwqLIpP173aaQqJ3Ih-qcR2Bk=/1024x650/arc-anglerfish-arc2-prod-sltrib.s3.amazonaws.com/public/H5G2HUXM7VGMNKJC2QO4GIPQRM.jpg"
        alt="404"
      />
    </Container>
  );
};

export default ErrorPage;
