import { container, title } from './styles';
const Header  = () => {
        return <header css={container}>
        <h1 css={title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
    </header>
}

export default Header