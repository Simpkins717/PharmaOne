import Logo from '../components/Logo';
import LandingPageImg from '/LandingPageImg.svg';
import { StyledLink } from '../components/StyledLink';

const Landing = () => {
  return (
    <div className='flex'>
      <div>
        <Logo />
        <StyledLink to='/dashboard'>Browze</StyledLink>
        <div>
          <p>
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
  );
};

export default Landing;
