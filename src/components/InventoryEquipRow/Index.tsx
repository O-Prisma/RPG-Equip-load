import Router from "next/router";

import trans from '../../../public/assets/json/translationEquipmentsDnD.json';

import { InventoryContainer } from './styles';

export interface Equipment {

    index: string;
    name: string;
    cost: { value: number, unit: string };
    weight: { lbs: number, kg: number };
    inventoryFunction?: Function;
    inventory?: Array<Equipment>

}

export default function InventoryEquipRow(equip: Equipment) {

    const { index, name, cost, weight, inventoryFunction, inventory } = equip;

    function capitalize(string) {

        let str = String(string);

        return str.charAt(0).toUpperCase() + str.substring(1, str.length);

    }

    return (

        <InventoryContainer>

            <h2 className="name">{capitalize(trans[name.toLowerCase()])}</h2>

            <div className="infos">
                <div className="cost"><div className="label">Custo:</div> {cost.value + ' ' + trans[cost.unit]}</div>
                <div className="weight"><div className="label">Peso:</div> {weight['kg'] + ' kg'}</div>
            </div>

            <div className="options">

                <button className="remove-equipment" onClick={function() {

                    let newValue: any = inventory;
                    
                    let equipIndex = inventory.findIndex(equipment => {
                    
                        return index == equipment.index;

                    });
                    
                    if (equipIndex != -1) {
                        
                        newValue.splice(equipIndex, 1);
                        
                        inventoryFunction(newValue);
                    }
                    
                    window.localStorage.setItem('inventory', JSON.stringify(newValue));

                    Router.reload();

                }}>
                    <div >- <div className="text">Remover item</div></div>
                </button>

            </div>

        </InventoryContainer>

    )

}