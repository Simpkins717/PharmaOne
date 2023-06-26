import Logo from '../components/Logo';
import LandingPageImg from '/LandingPageImg.svg';
import { StyledLink } from '../components/StyledLink';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <>
      <div className='flex h-5/6'>
        <div>
          <Logo />
          <StyledLink to='/dashboard'>Look Around</StyledLink>
          <div className=''>
            <p className='m-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex minus
              necessitatibus tempore dolore esse temporibus, fuga modi sunt, ad
              quaerat magni quasi. Dolor eligendi, voluptas fugit laudantium id
              odit? Error.
            </p>
            <StyledLink to='/register'>Login/Register</StyledLink>
          </div>
        </div>

        <img className='w-1/2' src={LandingPageImg} alt='' />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
