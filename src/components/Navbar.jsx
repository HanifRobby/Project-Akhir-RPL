import {horizontalLogo} from '../assets'

const Navbar = () => {
  return (
    <div className="flex flex-row h-44 justify-between items-center bg-primary p-11 border-b-4">
      <img src={horizontalLogo} className="w-80 h-24" />
      <div className="flex flex-row gap-20 justify-between">
        <div className="flex flex-row gap-12 justify-between items-center">
          <a href="" className="font-jua text-xl">
            Home
          </a>
          <a href="" className="font-jua text-xl">
            Products
          </a>
          <a href="" className="font-jua text-xl">
            Resources
          </a>
        </div>
        <div className='flex flex-row gap-11 justify-between items-center'>
          <a href='' className='bg-secondary text-white px-10 py-3 rounded-lg'>Login</a>
          <a href='' className='bg-secondary text-white px-10 py-3 rounded-lg'>Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;