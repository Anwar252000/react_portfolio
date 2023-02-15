import { Link } from 'react-router-dom'

export default function Navbar(props) {
   
  return (
    <>
      <div className="fixed top-0 z-10 bg-gray-50 w-full flex justify-between drop-shadow-xl">
        <Link to="/"><div className="brand py-3 cursor-pointer mx-3 font-bold">{props.brand}</div></Link>
        <ul className='flex py-3 space-x-6'>
          <li><Link className='group  text-black transition duration-300' to="/">Home <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  bg-black"></span></Link></li>
          <li ><Link className='group  text-black transition duration-300' to="/skills">Skills <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  bg-black"></span></Link></li>
          <li ><Link className='group  text-black transition duration-300' to="/projects">Projects <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  bg-black"></span></Link></li>
          <li ><Link className='group  text-black transition duration-300' to="/services">Services <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  bg-black"></span></Link></li>
          <li ><Link className='group  text-black transition duration-300' to="/clints">Our Clints <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  bg-black"></span></Link></li>
          <li ><Link className='group  text-black transition duration-300' to="/about">About <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  bg-black"></span></Link></li>
          <li ><Link className='group  text-black transition duration-300' to="/contact">Contact Us <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5  bg-black"></span></Link></li>
        </ul>
        <div className="logInSignUpBtns space-x-2">
          <Link to="/contact"><button className='btn btn-ghost bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500'>LOGIN</button></Link>
          <button className='btn btn-ghost bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500'>SIGN UP</button>
        </div>
      </div>  
    </>
  )
}
