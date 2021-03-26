import Link from 'next/link';

export default function EquipmentRow(
    { index, name, cost: { quantity, unit }, category, type, weight, children }
) {

    return (
        <div className="item">

            <Link href={`/equipments/${index}`}>

                <h2 className="item-name">{name}</h2>

            </Link>

            <div className="item-properties">

                <div className="cost-property property">

                    <p className="label">Custo: </p>
                    <p className="info">{`${quantity} ${unit}`}</p>

                </div>

                <div className="category-property property">

                    <p className="label">Categoria: </p>
                    <p className="info">{category}</p>

                </div>

                <div className="type-property property">

                    <p className="label">Tipo: </p>
                    <p className="info">{type}</p>

                </div>

                <div className="weight-property property">

                    <p className="label">Peso:</p>
                    <p className="info">{weight}</p>

                </div>

            </div>

            {children}

        </div>
    )

}