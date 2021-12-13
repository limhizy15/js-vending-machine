import el from '../../util/dom.js';
export default class InventoryItems {
    #prevItems = [];
    #res = [];
    buildItem(item) {
        return el(`<tr><td>${item.name}</td><td>${item.price}</td><td>${item.amount}</td></tr>`);
    }
    update(items) {
        items.forEach((item, i) => {
            const prevItem = this.#prevItems[i];
            if (!prevItem || item.price !== prevItem.price || item.amount !== prevItem.amount) {
                this.#res[i] = this.buildItem(item);
            }
        });
        this.#prevItems = items;
        return this.#res;
    }
}
//# sourceMappingURL=inventoryItems.js.map