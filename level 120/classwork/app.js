// 2) Function to get the union of sets
function unionOfSets(sets) {
    let unionSet = new Set();
    sets.forEach(set => {
        set.forEach(item => {
            unionSet.add(item);
        });
    });
    return unionSet;
}

// 3) Function to find the symmetric difference between two sets
function symmetricDifference(set1, set2) {
    let diff = new Set(set1);
    set2.forEach(item => {
        if (diff.has(item)) {
            diff.delete(item);
        } else {
            diff.add(item);
        }
    });
    return diff;
}

// 4) Function to count the frequency of characters in a string
function characterFrequency(str) {
    let frequencyMap = new Map();
    for (let char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
}

// Example usage:

// 2. Union of sets
const result = unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
console.log(result); // Set {1, 2, 3, 4}

// 3. Symmetric difference between two sets
const diffResult = symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5]));
console.log(diffResult); // Set {1, 2, 4, 5}

// 4. Character frequency in a string
const frequencyMap = characterFrequency("hello");
console.log(frequencyMap); // Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}
