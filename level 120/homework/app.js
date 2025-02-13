// 1) Function to check if one set is a subset of another
function isSubset(set1, set2) {
    for (let item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }
    return true;
}

// 2) Function to invert a Map (keys and values swapped)
function invertMap(map) {
    let invertedMap = new Map();
    for (let [key, value] of map) {
        invertedMap.set(value, key);
    }
    return invertedMap;
}

// 3) Function to find all keys in a Map with the maximum value
function maxKeys(map) {
    let maxVal = -Infinity;
    let maxKeys = [];

    for (let [key, value] of map) {
        if (value > maxVal) {
            maxVal = value;
            maxKeys = [key];
        } else if (value === maxVal) {
            maxKeys.push(key);
        }
    }

    return maxKeys;
}

// Example usage:

// 1. Checking if one set is a subset of another
console.log(isSubset(new Set([1, 2]), new Set([1, 2, 3]))); // true

// 2. Inverting a Map (keys and values swapped)
const invertedMap = invertMap(new Map([['a', 1], ['b', 2], ['c', 1]]));
console.log(invertedMap); // Map {1 => 'c', 2 => 'b'}

// 3. Finding all keys with the maximum value in a Map
const maxKeysResult = maxKeys(new Map([['a', 5], ['b', 3], ['c', 5]]));
console.log(maxKeysResult); // ['a', 'c']
 