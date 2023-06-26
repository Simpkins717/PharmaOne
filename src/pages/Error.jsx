import ErrorImg from '/ErrorImg.svg';

import { StyledLink } from '../components/StyledLink';

const Error = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1>You Shouldnt be here!</h1>
      <img className='w-7/12' src={ErrorImg} alt='error page' />
      <StyledLink to='/'>Back to Safety</StyledLink>
    </div>
  );
};

export default Error;
