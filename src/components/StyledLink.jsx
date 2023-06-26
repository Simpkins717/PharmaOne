import { Link } from 'react-router-dom';

export const StyledLink = ({ children, to }) => {
  return (
    <Link to={to} className=' rounded-md bg-red-400 py-1 px-3'>
      {children}
    </Link>
  );
};
