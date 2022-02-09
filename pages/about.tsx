import About from '@components/about/about';
import SideBar from '@components/sidebar';
import Page from '@layouts/page';
import { aboutStyle, paraStyle } from '@styles/About';
const about = () => (
    <Page>
        <SideBar/>
        <p css={paraStyle}>
            <About/>
        </p>
    </Page>
)

export default about;