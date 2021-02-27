import styled from 'styled-components';

const Item = styled.li`

    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;

    background: #FFF;
    color: #000;

    width: 550px;

    gap: 10px;

    margin: 20px 0;

    border-radius: 0 0 8px 8px;


    h2 {

        text-decoration: none;
        color: #FFF;
        background: #800000;
        display: block;
        text-align: center;
        width: 100%;
        padding: 10px;

        border-radius: 8px;

        margin-bottom: 20px;
        transition: 0.4s;

        cursor: pointer;

    }

    h2:hover {

        background-color: #FFF;
        color: #800000;

        transition: 0.4s;

    }

    .infos {

        display: grid;

        grid-template-columns: auto;

        justify-content: center;
        align-items: center;

        gap: 10px;

        text-align: center;

    }

    .infos div {

        display: flex;
        gap: 5px;

    }

    .infos div .label {

        font-weight: 700;

    }

    .add-equipment {

        background: #800000;
        color: #FFF;
        display: block;
        width: 150px;
        margin-top: 20px;
        padding: 10px;
        border: none;
        border-radius: 8px;

        font-weight: 700;

        cursor: pointer;

        transition: 0.4s;

    }

    .add-equipment:hover {

        background: #A52A2A;
        border-radius: 10px;
        transition: 0.4s;

    }

`;

export default Item;