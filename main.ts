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

    let items: any[] = [];
    if (townSize == "small") {
        items = getRandomItems(data, 1, 4);
    } else if (townSize == "medium") {
        items = [...getRandomItems(data, 1, 3), ...getRandomItems(data, 2, 2)];
    } else if (townSize == "large") {
        items = [...getRandomItems(data, 1, 4), ...getRandomItems(data, 2, 3), ...getRandomItems(data, 3, 2)];
    } else {
        throw new Error("Invalid town size");
    }

    return items;
};

function getRandomItems(data: any[], rarity: number, count: any) {
    let items = data.filter(item => item.rarity == rarity);
    let result: any[] = [];
    for (let i = 0; i < count; i++) {
        let index = Math.floor(Math.random() * items.length);
        result.push(items[index]);
        items.splice(index, 1); 
    }
    return result;
}
console.log(getStock(town1.shopType, town1.townSize));