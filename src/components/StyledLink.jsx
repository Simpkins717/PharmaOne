import { Link } from 'react-router-dom';

export const StyledLink = ({ children, to }) => {
  return (
    <Link to={to} className=' rounded-md bg-sky-300 py-1 px-3 ml-4'>
      {children}
    </Link>
  );
};
