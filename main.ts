import { alchemist_items, blacksmith_items, artificer_items, general_times, illicit_items, jeweler_items, tavern_items } from './items/data';

let town1 = {
    shopType: "alchemist",
    townSize: "small"
};

let town2 = {
    shopType: "blacksmith",
    townSize: "medium"
};

function getStock(shopType: string, townSize: string) {
    let data: any[] = [];
    if (shopType == "alchemist") {
        data = alchemist_items;
    } else if (shopType == "blacksmith") {
        data = blacksmith_items;
    } else if (shopType == "artificer") {
        data = artificer_items;
    } else if (shopType == "general") {
        data = general_times;
    } else if (shopType == "illicit") {
        data = illicit_items;
    } else if (shopType == "jeweler") {
        data = jeweler_items;
    } else if (shopType == "tavern") {
        data = tavern_items;
    }
    else {
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

console.log(getStock(town1.shopType, town1.townSize));