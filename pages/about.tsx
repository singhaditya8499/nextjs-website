import Page from '@layouts/page';
import { aboutStyle, paraStyle } from '@styles/About';
const about = () => (
    <Page>
        <div css={aboutStyle}>
            <a href="https://github.com/singhaditya8499">
                <img src="https://img.icons8.com/material-outlined/24/000000/github.png"/>
            </a>
            <a href="https://codeforces.com/profile/wh1te_whale">
                <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png"/>
            </a>
            <a href="https://keybase.io/singhaditya">
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-keybase-a-key-directory-that-maps-social-media-identities-to-encryption-logo-color-tal-revivo.png"/>
            </a>
            <a href="https://www.hackerrank.com/white_whale">
                <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-filled-tal-revivo.png"/>
            </a>
            <a href="https://www.hackerearth.com/@white_whale">
                <img src="https://brandeps.com/icon-download/H/Hackerearth-icon-vector-01.svg" width="24px"/>
            </a>
        </div>
        <p css={paraStyle}>
            Hello my name is Aditya Singh.
        </p>
    </Page>
)

export default about;