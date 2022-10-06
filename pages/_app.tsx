import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type {AppProps} from 'next/app'
import Pixel_facebook from "../business/service/pixel_facebook";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Pixel_facebook/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
