import Head from "next/head";
import Link from "next/link";

function Layout() {
    return (
        <Head>
            <link
                rel="preload"
                href="/font/Riposte-Regular.otf"
                as="font"
                crossOrigin=""
            />
            <link
                rel="preload"
                href="/font/Recoleta-Regular.ttf"
                as="font"
                crossOrigin=""
            />
        </Head>
    )
}

export default Layout;