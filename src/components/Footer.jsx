import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='bg-cyan-400 absolute bottom-0 min-w-full '>
      <div>
        <h1>Company</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero hic
          velit, aliquam temporibus necessitatibus dolores
        </p>
      </div>
      <div>
        <h1>Support</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          minima delectus blanditiis, culpa saepe aliquid nobis velit a?
        </p>
      </div>
      <div>
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <h1>PharmaOne &copy;</h1>
      </div>
    </div>
  );
};

export default Footer;
