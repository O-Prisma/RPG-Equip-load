import styled from 'styled-components';

export const Container = styled.div`

    .header-container .menu {

        background: #090809;
        padding: 20px;
        
    }

    .header-container {
        
        display: flex;
        flex-direction: column;
        justify-content: center;

        position: sticky;
        top: 0;

    }
    
    .header-container a {
        
        text-decoration: none;
        color: #a2a2a2;
        transition: 0.4s;
        border-radius: 8px;
        padding: 10px;
        
    }
    
    .header-container a:hover {
        
        color: #FFF;
        background: #2f2f2f;
        transition: 0.4s;
        
    }
    
    .hamburguer-menu {
        
        display: none;
        
    }
    
    @media screen and (max-width: 700px) {
        
        .header-container {

            align-items: flex-end;
            justify-content: right;

            padding: 10px;

            background: black;

        }

        .hamburguer-menu {
            
            display: block;
            padding: 10px;
            border: none;
            color: white;
            background: black;

            border-radius: 8px;
            outline: none;
            
        }
        
        .hamburguer-menu.itens {
            
            position: absolute;
            bottom: 100%;
            width: 100%;
            height: 0;
            background: #000;
            left: 0;
            top: -200%;
            transition: 0.4s;
            z-index: -1;

            display: flex;
            justify-content: center;
            align-items: flex-start;

            text-align: center;
            
        }
        
        .hamburguer-menu.itens.active {
            
            bottom: 0;
            top: 0;
            height: 100vh;
            background: #000;
            transition: 0.4s;
            
        }

        .hamburguer-menu.item {

            background: #090809;
            width: 200px;
            border-radius: 8px;

        }

        .hamburguer-menu.item a {

            display: block;
            width: 100%;

        }
        
        .menu {
            
            display: none;
            
        }

        .here {

            background: #2f2f2f !important;
            color: #FFF !important;

        }

    }

`;