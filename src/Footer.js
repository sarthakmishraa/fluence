// Footer.js
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className='FooterName'>
        <h1 className='FooterNameP1'>flu</h1>
        <h1 className='FooterNameP2'>ence</h1>
      </div>
      
      <div className='FooterContent1'>
        <h2>Documentation</h2>
        <ul>
          <li><Link to="https://github.com/adiimated/Fluence" target="_blank">Code</Link></li>
          <li><Link to="https://github.com/adiimated/Fluence?tab=GPL-3.0-1-ov-file" target="_blank">License</Link></li>
        </ul>
      </div>

      <div className='FooterContent2'>
        <h2>Portfolio</h2>
        <ul>
          <li><Link to="http://sarthakmishra.lovestoblog.com/?i=2" target="_blank">Sarthak Mishra's Portfolio</Link></li>
          <li><Link to="https://adiimated.github.io/portfolio/" target="_blank">Pratiksha Naik's Portfolio</Link></li>
        </ul>
      </div>
      
      <div className="FooterImage"></div>
      <hr/>
    </div>
  );
}

export default Footer;