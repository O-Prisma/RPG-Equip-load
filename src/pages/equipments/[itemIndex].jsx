import Head from 'next/head';
import Link from 'next/link';

import Container from './styles';

export default function Equipment() {

    return (

        <Container>

            <Head>
                <title>Informações de Equipamento - Não utilizado ainda!</title>
            </Head>

            <main className="main">

                <h1>Ainda não tem um uso muito prático essa página, recomendo voltar. Mas é perigoso ir sozinho, leve isto:</h1>
                <Link href="/"><a>Espada Mestra!</a></Link>

            </main>

        </Container>

    )

}