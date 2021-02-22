import { useState } from 'react';

import { EquipmentRow } from '../components/EquipmentRow/Index';
import { InventoryEquipRow } from '../components/InventoryEquipRow/Index';

import { Container } from './styles';

import equipments from '../../public/assets/json/equipmentsDnD.json';
import trans from '../../public/assets/json/translationEquipmentsDnD.json';

export default function Index() {

    function useLocalStorage(key, defaultValue) {

        const [storedValue, setStoredValue] = useState(() => {

            try {

                const item = window.localStorage.getItem(key);

                return item ? JSON.parse(item) : defaultValue;

            } catch (error) {

                return defaultValue;

            }

        });

        const setValue = value => {

            try {

                const valueToStore = value instanceof Function ? value(storedValue) : value;

                setStoredValue(valueToStore);

                window.localStorage.setItem(key, JSON.stringify(valueToStore));

            } catch (err) {

                console.log(err);

            }

        };

        return [storedValue, setValue];

    }

    let [inventory, setInventory] = useLocalStorage('inventory', []);

    let [equipmentsList, setEquipmentsList] = useState(equipments.map(getEquipmentRow));

    
    function getEquipmentRow({index, name, cost, category, properties, type}) {
        
        function isInsideInventory(equip) {
    
            return (equip.index === index);
    
        }

        return (

            <EquipmentRow
                key={index}
                index={index}
                name={name}
                category={category}
                cost={cost}
                type={type}
                weight={properties.weight}
                isListed={(inventory.find(isInsideInventory) !== undefined)}
                inventoryFunction={setInventory}
                inventory={inventory}
            />

        )

    }

    function getInventoryRows({index, name, cost, category, properties, type}) {

        return (

            <InventoryEquipRow
                key={index}
                index={index}
                name={name}
                cost={cost}
                weight={properties.weight}
                inventoryFunction={setInventory}
                inventory={inventory}
            />

        )

    }

    return (

        <Container>

            <div className="header">

                <div className="search-bar">
                    <input type="text" name="search" id="search" placeholder="Pesquise um Item!" onChange={function(e) {

                        e.preventDefault();

                        let searchValue = e.target.value;

                        if(searchValue) {

                            let equips = equipments.filter(element => {

                                return ((element.index.includes(searchValue.toLowerCase())) || (trans[element.name.toLowerCase()].includes(searchValue.toLowerCase())))

                            });

                            setEquipmentsList(equips.map(getEquipmentRow));

                        } else {

                            setEquipmentsList(equipments.map(getEquipmentRow));

                        }

                    }} />
                    <button className="search-btn">
                        <i className="material-icons icon">search</i>
                    </button>
                </div>


            </div>

            <div className="inventory-container">

                <header className="inventory-header">
                    <button className="minify-inventory" onClick={() => {

                        document.querySelector('.main-container').classList.toggle('minify');

                    }}>
                        <i className="material-icons">more_horiz</i>
                    </button>

                    <div className="total">
                        <p className="label">Peso total:</p>
                        {inventory.reduce((acc, equip) => {

                            return acc + Number(equip.weight.kg);

                        }, 0) + ' kg'}
                    </div>
                </header>

                <div className="main-container minify">
                    {equipments.filter((equip) => {

                        return (inventory.find(function(inv) {

                            return (inv.index == equip.index);

                        })) && equip;

                    }).map(getInventoryRows)}
                </div>

            </div>

            <ul className="main">

                {equipmentsList}

            </ul>

            <button className="return-to-top" onClick={function() {

                scrollTo({behavior: 'smooth', top: 0, left: 0});

            }}>
                <i className="material-icons">arrow_upward</i>
            </button>

        </Container>

    )

}