import Head from 'next/head';
import Link from 'next/link';

import Container from './styles';

export default function Header({ children }) {
 
    return (

        <Container>

            <div className="header-container">

                <Head>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/assets/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/assets/favicon/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>

                <div className="menu">

                    <Link href="/">Início</Link>
                
                </div>

                <button className="hamburguer-menu" onClick={function() {

                    document.querySelector('ul.hamburguer-menu.itens').classList.toggle('active');

                }}>
                    <i className="material-icons">menu</i>
                </button>

                <ul className="hamburguer-menu itens">

                    <li
                        className='hamburguer-menu item'
                        onClick={function() {

                            document.querySelector('ul.hamburguer-menu.itens').classList.toggle('active');

                        }}
                    >

                        <Link href="/">Início</Link>

                    </li>

                </ul>

            </div>

            {children}

        </Container>
    )

}