import { useEffect, useState } from "react";
import Head from 'next/head';

import Container from './styles';

import checkEquipmentWeight from '../utils/checkEquipmentWeight.js';
import reduceWeigths from '../utils/reduceWeights.js';
import checkEquipmentType from '../utils/checkEquipmentType.js';
import minimizeInventory from '../utils/minimizeInventory.js';
import searchItem from '../utils/searchItem.js';

import EquipmentRow from '../components/EquipmentRow/Index.jsx';

import translations from '../assets/json/translations.json';

export default function Index({ equips }) {

    const [inventory, setInventory] = useState([]);
    const [weight, setWeight] = useState(0);

    const [inventoryRows, setInventoryRows] = useState(
        inventory.map(getEquipmentsRow)
    );
    const [equipsRows, setEquipsRows] = useState(equips.map(getEquipmentsRow));

    useEffect(() => {

        const ls = window.localStorage.getItem('inventory');

        if (ls) {
            
            setInventory(JSON.parse(ls));
            
        } else {
            
            window.localStorage.setItem('inventory', JSON.stringify(inventory));
            
        }
        
        setWeight(
            inventory.reduce(reduceWeigths, 0).toString().split('.').join(',')
        );
        
        setInventoryRows(inventory.map(getEquipmentsRow));
        setEquipsRows(equips.map(getEquipmentsRow));
        
        
    }, [])
    
    useEffect(() => {

        setWeight(
            inventory.reduce(reduceWeigths, 0).toString().split('.').join(',')
        );
        
        setInventoryRows(inventory.map(getEquipmentsRow));
        setEquipsRows(equips.map(getEquipmentsRow));
        
    }, [inventory]);
    
    function getEquipmentsRow(equip) {
        
        return (

            <EquipmentRow
                key={equip.index}
                index={translations[equip.index]}
                name={translations[equip.name]}
                cost={{quantity: equip.cost.quantity, unit: translations[equip.cost.unit]}}
                category={translations[equip['equipment_category'].name]}
                type={translations[checkEquipmentType(equip)]}
                weight={checkEquipmentWeight(equip, equips)}
            >

                <button className="toggle-equip-inventory" onClick={function() {
                    
                    let newInventory = inventory;
                    
                    if ((inventory.find(inv => inv.index == equip.index))) {
                        
                        newInventory.splice((
                            inventory.findIndex(inv => inv.index == equip.index)
                        ), 1);
                        
                    } else {
                        
                        newInventory.push(equip);
                        
                    }
                    
                    setInventory(newInventory);
                    
                    window.localStorage.setItem(
                        'inventory', JSON.stringify(inventory)
                    );
                    
                    setWeight(
                        inventory.reduce(
                            reduceWeigths, 0
                        ).toString().split('.').join(',')
                    );

                    setInventoryRows(inventory.map(getEquipmentsRow));
                    setEquipsRows(equips.map(getEquipmentsRow));
                
                }}>
                    {(
                        inventory.find(inv => inv.index == equip.index)
                    ) ? `- Remover ` : `+ Adicionar `} 
                    Item!
                </button>

            </EquipmentRow>

        )
        
    }
    
    return (
        
        <Container>

            <Head>
                <title>Calculadora de peso!</title>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            </Head>

            <header className="header">

                <div className="search-bar-container">

                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Pesquise um item!"
                        onChange={(e) => {
                            searchItem(
                                e, 
                                equips, 
                                translations, 
                                setEquipsRows, 
                                getEquipmentsRow
                            )
                        }}
                    />

                    <p className="icon">
                        <i className="material-icons">search</i>
                    </p>

                </div>

                <h4 className="info">
                    Bem, se você encontrar algum bug, tiver alguma ideia, ou 
                    acompanhar futuras atualizações do projeto, é só clickar 
                    no link a seguir: <a href="https://github.com/O-Prisma/RPG-Equip-load">Informações</a>
                </h4>

            </header>

            <main className="main">
                
                <div className="top-main">
                
                    <div className="info-container">
                        <p className="info-label">Peso total: </p>
                        <p className="info-data">{weight} kg</p>
                    </div>
                    
                    <div className="inventory-container">

                        <div className="inventory-minimize">

                            <button
                                className="minimize-btn"
                                onClick={minimizeInventory}
                            >
                                &#8212;
                            </button>

                        </div>

                        <div className="inventory-list">

                            {inventoryRows.length > 0 ? inventoryRows : (
                                <h2 className="inventory-info">
                                    Você não adicionou nenhum item ao inventário ainda!
                                </h2>
                            )}

                        </div>

                    </div>

                </div>

                <div className="item-list">

                    {equipsRows}

                </div>

            </main>

            <button className="scroll-top" onClick={(e) => {

                e.preventDefault()

                window.scrollTo({behavior: "smooth", left: 0, top: 0});

            }}>&#8593;</button>

        </Container>

    );

}

export async function getStaticProps() {

    const res = await fetch('https://www.dnd5eapi.co/api/equipment');
    const data = await res.json();

    if (!data) {

        return {

            notFound: true

        }

    }

    const promises = await data.results.map(async function({ index }) {

        const equipRes = await fetch(
            `https://www.dnd5eapi.co/api/equipment/${index}`
        );

        return equipRes.json();

    });

    return {

        props: {
            equips: await Promise.all(promises)
        }

    }

}
