import Link from 'next/link';
import { useState } from 'react';

export default function EquipmentRow(
    { index, name, cost: { quantity, unit }, category, type, weight, lang, children }
) {

    const smallTrans = {
        "cost": {
            "en": "Cost",
            "pt-br": "Custo"
        },
        "category": {
            "en": "Category",
            "pt-br": "Categoria"
        },
        "type": {
            "en": "Type",
            "pt-br": "Tipo"
        },
        "weight": {
            "en": "Weight",
            "pt-br": "Peso"
        }
    }

    return (
        <div className="item">

            <Link href={`/equipments/${index}`}>

                <h2 className="item-name">{name}</h2>

            </Link>

            <div className="item-properties">

                <div className="cost-property property">

                    <p className="label">{smallTrans['cost'][lang]}: </p>
                    <p className="info">{`${quantity} ${unit}`}</p>

                </div>

                <div className="category-property property">

                    <p className="label">{smallTrans['category'][lang]}: </p>
                    <p className="info">{category}</p>

                </div>

                <div className="type-property property">

                    <p className="label">{smallTrans['type'][lang]}: </p>
                    <p className="info">{type}</p>

                </div>

                <div className="weight-property property">

                    <p className="label">{smallTrans['weight'][lang]}:</p>
                    <p className="info">{weight}</p>

                </div>

            </div>

            {children}

        </div>
    )

}