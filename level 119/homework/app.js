// 1) Function to store students' names and scores in a Map
function studentsScoresToMap(students) {
    let studentMap = new Map();
    students.forEach(([name, score]) => {
        studentMap.set(name, score);
    });
    return studentMap;
}

// 2) Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 3) Function to create a copy of the Map and increase each student's score by 5
function increaseScores(studentMap) {
    let newMap = new Map(studentMap);
    newMap.forEach((score, student) => {
        newMap.set(student, score + 5);
    });
    return newMap;
}

// Example usage:

// Example for 1st task: Students' names and scores in a Map
const students = [["გიორგი", 75], ["ნინო", 85], ["მარიამი", 90]];
const studentMap = studentsScoresToMap(students);
console.log("Students' Map:", studentMap);

// Example for 2nd task: Remove duplicates from an array
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(arr);
console.log("Unique Array:", uniqueArr);

// Example for 3rd task: Increase each student's score by 5
const newStudentMap = increaseScores(studentMap);
console.log("New Students' Map with Increased Scores:", newStudentMap);
