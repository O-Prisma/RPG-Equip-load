export default function reduceWeigths(acc, actualEquip) {

    if (actualEquip?.weight) {
        
        return acc + (actualEquip.weight / 2)
        
    }

    if (actualEquip?.contents) {
        
        return actualEquip.contents.reduce((accumulator, content) => {
            
            let itemReference = equips.filter(
                item => (item.index == content.item.index)
            )[0];
            
            return accumulator + (
                (itemReference.weight / 2) * 
                content.quantity
            );
            
        }, 0);
        
    }

    return acc

}