export default function searchItem(e, equips, lang, translations, setEquipsRows, getEquipmentsRow) {

    e.preventDefault();

    if (e.target.value.length > 0) {

        const value = e.target.value.toLowerCase();

        const filteredEquipArrays = equips.filter(({index, name}) => {
            
            return (
                (name.toLowerCase().includes(value)) ||
                (index.toLowerCase().includes(value)) ||
                (translations[name][lang].toLowerCase().includes(value)) ||
                (translations[index][lang].toLowerCase().includes(value))
            );
            
        });

        setEquipsRows(filteredEquipArrays.map(getEquipmentsRow));
    
    } else {

        setEquipsRows(equips.map(getEquipmentsRow));

    }

}