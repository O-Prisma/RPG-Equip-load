import styled from 'styled-components';

const Container = styled.div`

    display: flex;
    flex-direction: column;

    ul.main {

        display: flex;
        justify-content: center;
        align-items: center;

        flex-wrap: wrap;

        gap: 20px;

    }

    .header {

        display: flex;
        width: 100%;
        position: static;
        justify-content: center;
        align-items: center;
        background: #26282a;
        padding: 20px;

    }

    .header .search-bar {

        display: flex;
        align-items: center;
        justify-content: center;

        border-bottom: 2px solid gray;

    }

    .header .search-bar input {

        border: none;
        background: none;
        padding: 5px;
        color: #FFF;
        width: 350px;
        outline: none;

    }

    .header .search-bar button {

        border: none;
        background: none;


        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;

        outline: none;

    }

    .inventory-container {

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }

    button.minify-inventory {

        width: 90%;
        padding: 10px;
        background: #26282a;
        color: #FFF;
        font-weight: 700;

        border-radius: 0 0 8px 8px;

        border: none;
        outline: none;
        margin-bottom: 20px;

        cursor: pointer;

        transition: 0.4s;

    }

    button.minify-inventory:hover {

        background: #090809;

        transition: 0.4s;

    }

    .main-container.minify {

        height: 0;
        display: none;

    }

    .main-container {

        display: flex;
        padding: 20px;
        background: white;
        justify-content: center;
        align-items: center;
        gap: 20px;

        border-radius: 8px;

        flex-grow: 1;
        overflow-x: scroll;

        width: 90%;

    }
    
    header.inventory-header{

        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-bottom: 20px;

    }

    button.return-to-top {

        position: fixed;
        bottom: 50px;
        right: 50px;
        padding: 20px;
        border-radius: 50%;
        border: none;
        background: #800000;
        color: #FFF;

        font-weight: 700;

        cursor: pointer;

        transition: 0.4s;

        outline: none;

    }

    header.inventory-header .total {

        background: #800000;
        width: 100%;
        padding: 20px;
        text-align: center;
        color: #FFF;

    }

    header.inventory-header .total p {

        font-weight: 700;

    }

    button.return-to-top:hover {

        background: #822222;

        transition: 0.4s;

    }

    @media screen and (max-width: 700px) {

        .header .search-bar input {

            width: 150px;

        }

        .header {

            align-self: center;
            justify-self: center;

        }

        button.return-to-top {

            padding: 10px;
            bottom: 25px;
            right: 25px;

        }

        .main-container {

            justify-content: flex-start;

        }

    }

`

export default Container;