import Header from '../components/Header/Index';

import '../global/css/global.styles.css';

function MyApp({ Component, pageProps }) {

    return (
        
        <Header>
            <Component {...pageProps} />
        </Header>
    
    )

}

export default MyApp;