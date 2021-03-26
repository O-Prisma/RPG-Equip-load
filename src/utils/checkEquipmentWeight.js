export default function checkEquipmentWeight(equip) {
    
    if (equip?.weight) {
        return `${
            (equip.weight / 2)
                .toString()
                .split(".")
                .join(",")
        } kg`;
    }
    
    if (!equip.contents) {
        return "~ Não possuí peso ~";
    }
    
    return `${equip.contents.reduce((acc, content) => {
        
        let itemReference = equips.filter(
            item => (item.index == content.item.index)
        )[0];
        
        return acc + (
            (itemReference.weight / 2) * 
            content.quantity
        );
        
    }, 0).toString().split('.').join(',')} kg`;
    
}