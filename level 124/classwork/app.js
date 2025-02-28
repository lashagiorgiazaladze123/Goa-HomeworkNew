const promise1 = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise 1 resolved immediately!");
    } else {
      setTimeout(() => resolve("Promise 1 resolved after 2 seconds!"), 2000);
    }
  });
  
  const promise2 = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise 2 resolved immediately!");
    } else {
      setTimeout(() => resolve("Promise 2 resolved after 2 seconds!"), 2000);
    }
  });
  
  const promise3 = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise 3 resolved immediately!");
    } else {
      setTimeout(() => resolve("Promise 3 resolved after 2 seconds!"), 2000);
    }
  });
  

  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });