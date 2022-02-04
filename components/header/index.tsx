import { container } from './styles';
const Header  = () => {
        return (
        <header css={container}>
          <div>
            <a className="name" href="/">
              ADITYA SINGH
            </a> 
            <a href="/">
              Home
            </a>
            <a href="/blog">
              Blog
            </a>
            <a href="/about">
              About
            </a>
          </div> 
        </header>
        
)}

export default Header