function firstNonRepeating(str) {
    // ვასრულებთ ჩათვლას იმ სიმბოლოების რაოდენობაზე
    const charCount = {};
  
    // დავთვალოთ რამდენჯერ გვხვდება თითოეული სიმბოლო
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // დავუბრუნოთ პირველი სიმბოლო რომელიც მხოლოდ ერთხელ გვხვდება
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // თუ არ არსებობს განმეორებული სიმბოლო, დავუბრუნოთ false
    return false;
  }
  
  console.log(firstNonRepeating('hannah')); // false
  console.log(firstNonRepeating('abbia'));  // "i"
  

  //2
  function longestUniqueSubstring(str) {
    let start = 0;  // სტარტის ინდექსი
    let maxLength = 0;  // ყველაზე გრძელი უნიკალური ნაწილის სიგრძე
    let maxSubstring = '';  // ყველაზე გრძელი უნიკალური ნაწილის სტრინგი
    const charIndexMap = {};  // სიმბოლოების ინდექსები
  
    for (let end = 0; end < str.length; end++) {
      const currentChar = str[end];
  
      // თუ სიმბოლო უკვე არის, გადავდივართ იმ ინდექსზე, სადაც ამ სიმბოლომ გაიარა
      if (charIndexMap[currentChar] >= start) {
        start = charIndexMap[currentChar] + 1;
      }
  
      // სიახლე: გვახსოვს ამ სიმბოლოს ახალი ინდექსი
      charIndexMap[currentChar] = end;
  
      // თუ სიგრძე ყველაზე დიდი გახდა, ვახდენთ ჩანაცვლებას
      const currentLength = end - start + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxSubstring = str.slice(start, end + 1);
      }
    }
  
    return maxSubstring;
  }
  
  console.log(longestUniqueSubstring('abcabcbb'));  // "abc"
  console.log(longestUniqueSubstring('bbbbb'));     // "b"
  console.log(longestUniqueSubstring('pwwkew'));    // "wke"
  