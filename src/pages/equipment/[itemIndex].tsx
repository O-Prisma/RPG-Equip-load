import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import equipments from '../../../public/assets/json/equipmentsDnD.json';
import translations from '../../../public/assets/json/translationEquipmentsDnD.json';

import { ItemContainer, ItemInfos } from './styles';

function Equipment({ itemIndex, trans }) {

    String.prototype.capitalize = function() {

        let str = String(this);

        return str.charAt(0).toUpperCase() + str.substring(1, str.length);

    }

    return (
        
        <ItemContainer>

            <Head>
                <title>Equipamento: {trans[itemIndex.name.toLowerCase()].capitalize()}</title>
            </Head>

            <div className="header">


            </div>

            <div className="main">

                <div className="title">

                    <h1 className="name">{trans[itemIndex.name.toLowerCase()].capitalize()}</h1>
                
                </div>
                
                <div className="infos">


                    <div className="item-infos">

                        <ItemInfos className="cost">

                            <i className="material-icons icon">monetization_on</i>
                            <p className="info">Custo:</p>
                            <p className="data">{JSON.stringify(itemIndex.cost.value)} {JSON.stringify(trans[itemIndex.cost.unit]).split('"')[1]}</p>

                        </ItemInfos>

                        <ItemInfos className="category">

                            <i className="material-icons icon">bookmark</i>
                            <p className="info">Categoria: </p>
                            <p className="data">{trans[itemIndex.category].capitalize()}</p>

                        </ItemInfos>

                        <ItemInfos className="type">

                            <i className="material-icons icon">info_outline</i>
                            <p className="info">Tipo: </p>
                            <p className="data">{trans[itemIndex.type].capitalize()}</p>

                        </ItemInfos>

                        <div className="properties-container">

                            <ItemInfos className="properties-label">

                                <i className="material-icons icon">assistant</i>
                                <p className="info">Propriedades: </p>

                            </ItemInfos>

                            <ul className="propertyList">

                                <ItemInfos className="property">

                                    <i className="material-icons icon">work</i>
                                    <p className="info">Peso: </p>
                                    <p className="data">{itemIndex.properties.weight.kg + ' kg'}</p>

                                </ItemInfos>
                                
                            </ul>

                        </div>

                        <div className="options">

                            <ItemInfos className="listed">

                                <i className="material-icons icon">list</i>
                                <p className="info">Já na lista:</p>
                                <p className="data">Não</p>

                            </ItemInfos>

                        </div>

                    </div>

                    <div className="icon">

                        <Image
                            src={
                                (itemIndex.category != 'adventuring gear') ?
                                `/assets/images/svg/${itemIndex.category}.svg` :
                                `/assets/images/svg/${itemIndex.type}.svg`
                            }
                            alt="category icon"
                            width={300}
                            height={300}
                        />

                    </div>

                </div>

                

            </div>

        </ItemContainer>
    )

}

export async function getStaticPaths() {

    const equip = equipments.map((value) => (value.index));

    const paths = equip.map(itemIndex => ({
        params: { itemIndex }
    }));

    return {

        paths,
        fallback: false

    }

}

export async function getStaticProps({ params }) {
    
    const itemIndex = equipments.find(equipment => (equipment.index == params.itemIndex));
    const trans = translations;

    return { props: { itemIndex, trans } };

}

export default Equipment;