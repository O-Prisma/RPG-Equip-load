import styled from 'styled-components';

export const InventoryContainer = styled.div`

    min-width: 350px;
    text-align: center;

    h2.name {

        margin-bottom: 10px;

    }

    .infos > div {

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

    }

    .infos > div > .label {

        font-weight: 700;

    }

    button.remove-equipment {

        background: #800000;
        color: #FFF;
        width: 150px;
        margin-top: 20px;
        padding: 10px;
        border: none;
        border-radius: 8px;

        font-weight: 700;

        cursor: pointer;

        transition: 0.4s;

    }

    button.remove-equipment:hover {

        background: #A52A2A;
        border-radius: 10px;
        transition: 0.4s;

    }

    @media screen and (max-width: 700px) {

        min-width: 250px;

        align-self: flex-start;

    }

`;