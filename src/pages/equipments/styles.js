import styled from 'styled-components';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    main.main {

        width: 80%;
        display: flex;
        flex-direction: column;

    }

    main.main > h1 {

        font-weight: 700;
        letter-spacing: 5px;

    }

    main.main a {

        text-decoration: none;
        display: block;
        padding: 20px;
        color: #FFF;
        background: #800000;
        border-radius: 8px;
        font-weight: 600;
        width: 50%;
        margin-top: 50px;
        align-self: center;
        
        transition: 0.4s;

    }

    main.main a:hover {

        border-radius: 12px;
        background: #EEE;
        color: #800000;

        transition: 0.4s;

    }

`

export default Container;