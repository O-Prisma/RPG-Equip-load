import styled from 'styled-components';

const ItemContainer = styled.div`
    

    div.main {

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        margin-top: 50px;

    }

    div.infos {

        border-top: 15px solid maroon;
        background: #FFF;
        border-radius: 0 0 8px 8px;

        width: 90%;
        height: 50%;

        padding: 40px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        font-size: 100%;
        border-top: 5px solid maroon;
        padding: 20px;
        height: auto;

        gap: 20px;

    }

    div.infos > div.icon {

        margin-right: 10%;
        width: auto;
        height: auto;

    }

    div.title {

        width: 90%;
        font-size: 250%;

    }

    div.property {

        margin-left: 15%;

    }

    i {

        font-size: 100%;

    }

    @media screen and (max-width: 900px) {

        div.title {

            font-size: 100%;

        }

        i {

            font-size: 80%;

        }

        div.infos {

            font-size: 80%;

        }

    }

    @media screen and (max-width: 700px) {

        div.infos > div.icon {

            display: none;

        }

    }

`;

export const ItemInfos = styled.div`
    
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 250%;
    font-weight: 400;

    margin-bottom: 20px;

    @media screen and (max-width: 1100px) {

        font-size: 150%;

    }

`;

export default ItemContainer;