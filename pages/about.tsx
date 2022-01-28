import Page from '@layouts/page';
import Image from 'next/image';
const about = () => (
    <Page>
        <p>
            Hello my name is Aditya Singh.
        </p>
        <Image
        src="/profile.jpg"
        width={280}
        height={300}
        />
    </Page>
)

export default about;