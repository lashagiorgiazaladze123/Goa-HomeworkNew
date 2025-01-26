function getUniqueElements(matrix) {
    // flat() არკვევს 2D მასივს ერთ განზომილებიან მასივად
    const flatArray = matrix.flat();
    
    // გამოყენებულია Map, რომ თითოეული ელემენტის რაოდენობა აღინიშნოს
    const elementCount = new Map();
    
    // ყველა ელემენტის რაოდენობის დათვლისთვის
    flatArray.forEach(element => {
      elementCount.set(element, (elementCount.get(element) || 0) + 1);
    });
    
    // ფილტრაცია, რათა დავაბრუნოთ მხოლოდ ის ელემენტები, რომლებიც რამდენჯერმე არ იხვეწება
    const uniqueElements = flatArray.filter(element => elementCount.get(element) === 1);
    
    return [...new Set(uniqueElements)]; // Set-ს გამოიყენებთ უნიკალური ელემენტების დასაბრუნებლად
  }
  
  // მაგალითი
  const matrix = [
    [1, 2, 3],
    [4, 5, 1],
    [6, 7, 8]
  ];
  
  // ფუნქციის გამოძახება
  console.log(getUniqueElements(matrix));
  