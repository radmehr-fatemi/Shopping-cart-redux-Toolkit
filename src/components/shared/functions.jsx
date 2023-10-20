export const shortHandler = (text, digit) => {
    const splited = text.split("")
    const newText = splited.slice(0, digit)
    return newText
};

export const findQuantity = (id, data) => {
        if (data.some(item => item.id == id) ) {
            const item = data.find(item => item.id == id)
            return item.quantity
        } else {
            return 0
        }
};

export const totalCounter = (state) => {
    const itemsCounter = state.selectedItems.reduce((acc, cur) => acc + cur.quantity, 0);
    const total = state.selectedItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    return { itemsCounter, total }
} 