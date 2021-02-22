import Link from "next/link";
import Router from "next/router";

import trans from '../../../public/assets/json/translationEquipmentsDnD.json';

import { Item } from './styles';

export interface Equipment {

    index: string;
    name: string;
    cost: { value: number, unit: string };
    category: string;
    type: string;
    weight: { lbs: number, kg: number };
    isListed: boolean;
    inventoryFunction?: Function;
    inventory?: Array<Equipment>

}

export function EquipmentRow(equip: Equipment) {

    const { index, name, cost, category, type, weight, isListed, inventoryFunction, inventory } = equip;
    
    function capitalize(string) {

        let str = String(string);

        return str.charAt(0).toUpperCase() + str.substring(1, str.length);

    }

    return (

        <Item>

            <Link href={`/equipment/${encodeURIComponent(index)}`}>
                <h2 className="name">{capitalize(trans[name.toLowerCase()])}</h2>
            </Link>

            <div className="infos">
                <div className="cost"><div className="label">Custo:</div> {cost.value + ' ' + trans[cost.unit]}</div>
                <div className="category"><div className="label">Categoria:</div> {capitalize(trans[category.toLowerCase()])}</div>
                <div className="type"><div className="label">Tipo:</div> {capitalize(trans[type.toLowerCase()])}</div>
                <div className="weight"><div className="label">Peso:</div> {weight['kg'] + ' kg'}</div>
            </div>

            <div className="options">

                <button className="add-equipment" onClick={function() {

                    let newValue: any = inventory;

                    let equipFiltered = {
                        index,
                        name,
                        cost,
                        category,
                        type,
                        weight
                    };

                    if (isListed) {

                        let equipIndex = inventory.findIndex(equipment => {
                        
                            return index == equipment.index;

                        });
                        
                        if (equipIndex != -1) {
                            
                            newValue.splice(equipIndex, 1);
                            
                            inventoryFunction(newValue);
                        }
                        
                    } else {
                        
                        newValue.push(equipFiltered);

                        inventoryFunction(newValue);
                        
                    }
                    
                    window.localStorage.setItem('inventory', JSON.stringify(newValue));

                    Router.reload();

                }}>
                    {
                        (isListed) ?
                        (<div >- <div className="text">Remover item</div></div>) :
                        (<div >+ <div className="text">Adicionar item</div></div>)
                    }
                </button>

            </div>

        </Item>

    )

}