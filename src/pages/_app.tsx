import type { AppProps } from 'next/app';

import { Header } from '../components/Header/Index';

import '../global/css/global.styles.css';

function MyApp({ Component, pageProps }: AppProps) {

    String.prototype.capitalize = function() {

        let str = String(this);

        return str.charAt(0).toUpperCase() + str.substring(1, str.length);

    }

    return (
        
        <Header>
            <Component {...pageProps} />
        </Header>
    
    )

}

export default MyApp;