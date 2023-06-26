import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillAmazonCircle,
  AiFillAppstore,
  AiFillApple,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
  const companyLinks = [
    { title: 'About Us' },
    { title: 'Careers' },
    { title: 'Why PharmaOne' },
    { title: 'Blog' },
    { title: 'Contact Us' },
  ];
  const supportLinks = [
    { title: 'Resources' },
    { title: 'API' },
    { title: 'FAQ' },
    { title: 'Login' },
  ];
  return (
    <div className='bg-slate-400 absolute bottom-0 min-w-full text-gray-200  flex justify-around'>
      <div>
        <h1>Company</h1>
        <div className='flex flex-col'>
          {companyLinks.map((link, index) => {
            return (
              <Link key={index} className='p-4 hover:underline' to='/'>
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h1>Support</h1>
        <div className='flex flex-col'>
          {supportLinks.map((link, index) => {
            return (
              <Link key={index} className='p-4 hover:underline' to='/register'>
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className='pt-12'>
        <div className='flex gap-2 cursor-pointer'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillAmazonCircle />
          <AiFillAppstore />
          <AiFillApple />
        </div>
        <h4 className='text-xl'> &copy; PharmaOne 2023 </h4>
      </div>
    </div>
  );
};

export default Footer;
