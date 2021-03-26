import styled from 'styled-components';

const Container = styled.div`

    /**#800000 */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header.header {

        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        background-color: #090809;

    }

    .search-bar-container {

        display: flex;
        justify-content: center;
        align-items: center;
        color: #979AA4;
        border-bottom: 2px solid #979AA4;
        padding: 5px;

    }

    .search-bar-container .search-bar {

        background: none;
        border: none;
        color: #FFF;
        outline: none;
        width: 250px;

    }

    .search-bar-container .search-bar::placeholder {

        color: #979AA4

    }

    .search-bar-container .icon {

        cursor: pointer;

    }

    .main {

        width: 100%;
        height: 100%;

    }

    .top-main {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        
    }
    
    .top-main .info-container {
        
        padding: 20px;
        background-color: #26282A;
        color: #FFF;
        width: 100%;
        
    }
    
    .top-main .inventory-container {
        
        width: 100%;
        display: flex;
        flex-direction: column
        
    }
    
    .top-main .inventory-container button.minimize-btn {
        
        width: 100%;
        text-align: center;
        padding: 5px;
        border: none;
        font-weight: 700;
        background: #800000;
        color: #FFF;
        font-size: 20px;
        outline: none;
        transition: background-color 0.4s ease-in-out;
        margin-bottom: 20px;
        
        cursor: pointer;
        
    }
    
    .top-main .inventory-container button.minimize-btn:hover {

        background: #9C0E0E;

    }

    .top-main .inventory-container .inventory-list {
        
        margin-bottom: 20px;
        background: #FFF;
        height: auto;
        padding: 20px;
        border: 1px solid #979AA4;
        border-radius: 8px;
        width: 80%;
        align-self: center;
        display: flex;
        flex-flow: row nowrap;
        flex-grow: 1;
        gap: 10px;
        white-space: nowrap;
        overflow: auto;
        overflow-y: hidden;
        
    }

    .top-main .inventory-container .inventory-list::-webkit-scrollbar {

        width: 1em;

    }

    .top-main .inventory-container .inventory-list::-webkit-scrollbar-track {

        background: #979AA4;
        border-radius: 0 0 8px 8px;

    }

    .top-main .inventory-container .inventory-list::-webkit-scrollbar-thumb {

        background-color: #800000;
        border-radius: 0 0 8px 8px;

    }

    .top-main .inventory-container .inventory-list.minimized {

        display: none;

    }

    .top-main .inventory-container .inventory-list .item {

        background: #EEEE;

    }

    .inventory-info {

        align-self: center;
        justify-self: center;
        margin: auto;
        text-align: center;

    }

    .item {

        background-color: #FFF;
        padding: 20px;
        min-width: 350px;
        max-width: 350px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;

    }

    .item .property {

        display: flex;
        gap: 5px;
        margin: 10px 0;

    }

    .item .property .label {

        font-weight: 700;

    }

    .item .item-name {

        background-color: #800000;
        display: block;
        padding: 10px;
        width: 90%;
        color: #FFF;
        text-align: center;
        border-radius: 8px;
        white-space: normal;
        overflow: hidden;

        transition: background-color 0.4s;

        cursor: pointer;

    }

    .item .item-name:hover {

        background-color: #9C0E0E;

    }

    .item .toggle-equip-inventory {

        background-color: #800000;
        border: none;
        font-weight: 700;
        display: block;
        padding: 10px;
        width: 70%;
        color: #FFF;
        text-align: center;
        border-radius: 8px;
        outline: none;

        transition: background-color 0.4s;

        cursor: pointer;

    }

    .item .toggle-equip-inventory:hover {

        background-color: #FFF;
        color: #800000;

    }

    .item-list {

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 0 50px;

    }

    .scroll-top {

        position: fixed;
        bottom: 50px;
        right: 50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        font-size: 3em;
        text-align: center;
        font-weight: 700;
        background-color: #800000;
        color: #FFF;
        border: none;
        outline: none;

        cursor: pointer;

        transition: background-color 0.4s;

    }

    .scroll-top:hover {

        background-color: #9C0E0E;

    }

    h4.info {

        color: #979AA4;

    }

    h4.info a {

        text-decoration: none;
        color: #9C0E0E;
        transition: all 0.4s;

    }

    h4.info a:hover {

        color: #9C4E4E;
        text-decoration: underline;

    }

    @media screen and (max-width: 700px) {

        .scroll-top {

            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            font-size: 1em;

        }

        .inventory-info {

            font-size: 65%;

        }

    }

`;

export default Container;