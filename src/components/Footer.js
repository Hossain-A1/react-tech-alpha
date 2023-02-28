import { Link } from "react-router-dom"
import { FaFacebook,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-gray-50 text-center py-5">
     <p> &copy; {new Date().getFullYear()} goBuy. All right reserved.</p> 
    <div className="social flex justify-center items-center gap-3 py-2 text-2xl">
    <Link to='https://www.facebook.com/hossainislam.nur.9/'><FaFacebook/></Link>
     <Link to='https://www.linkedin.com/in/hossain-ahmed-163b11236/'><FaLinkedin/></Link>
    </div>
    </div>
  )
}

export default Footer