import Link from 'next/link';
import { GiAstronautHelmet as Astronaut } from 'react-icons/gi';
import { navigationStyles } from '@components/navigation/styles'

const Navigation = () => (
    <nav css={navigationStyles}>
        <Link href="/">
            <a aria-label="back to home">
                <Astronaut/>
            </a>
        </Link>
        <Link href="/about">
            <a>
                About
            </a>
        </Link>
    </nav>
)

export default Navigation;