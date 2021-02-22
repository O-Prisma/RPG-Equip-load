import type { AppProps } from 'next/app';

import { Header } from '../components/Header/Index';

import '../global/css/global.styles.css';

function MyApp({ Component, pageProps }: AppProps) {

    return (
        
        <Header>
            <Component {...pageProps} />
        </Header>
    
    )

}

export default MyApp;