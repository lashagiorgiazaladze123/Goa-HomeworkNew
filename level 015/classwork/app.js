const items = ['item1', 'item2', 'item3'];

const result = items.map((value, index) => {
  return { [index]: value };
});

console.log(result);
