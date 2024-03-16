import potions from "./alchemist.json";
import weapons from "./blacksmith.json";

function getStock(shopType: string, townSize: string) {
    let data;
    if (shopType == "alchemist") {
        data = potions;
    } else if (shopType == "blacksmith") {
        data = weapons;
    } else {
        throw new Error("Invalid shop type");
    }

    let rarity = townSize == "small" ? 1 : townSize == "medium" ? 2 : null;
    if (rarity === null) {
        throw new Error("Invalid town size");
    }

    let items = data.filter(item => item.rarity == rarity);
    let item1 = items[Math.floor(Math.random() * items.length)];
    let item2 = items[Math.floor(Math.random() * items.length)];
    return [item1, item2];
};

console.log(getStock("blacksmith", "medium"));