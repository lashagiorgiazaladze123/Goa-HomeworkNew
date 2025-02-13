function manualAssign(...objects) {
    let result = {};  // შედეგის ობიექტი

    // ყველა ობიექტის გასავლელად
    for (let obj of objects) {
        // თითოეული ობიექტის გასავლელად
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key];  // სიმახსოვრე
            }
        }
    }

    return result;  // გაერთიანებული ობიექტი
}

// ტესტირება
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, b: 4 };  // 'b' ორჯერ იქნება
const obj3 = { d: 5 };

const mergedObj = manualAssign(obj1, obj2, obj3);
console.log(mergedObj);  
// მოსალოდნელი შედეგი: { a: 1, b: 4, c: 3, d: 5 }
// 'b' ღირებულება იქნება ბოლო ობიექტიდან (obj2), რადგან მან გადაიტანა იგივე კлючი
