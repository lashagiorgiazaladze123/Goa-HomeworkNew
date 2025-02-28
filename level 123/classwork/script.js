const task1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 2000);
  });
  
  task1.then((message) => {
    console.log(message); 
  });

  const task2 = new Promise((resolve, reject) => {
    reject("Task 2 failed");
  });
  
  task2.catch((error) => {
    console.log(error); 
  });

  const task3 = new Promise((resolve) => {
    resolve(5);
  });
  
  task3
    .then((number) => {
      return number * 2; 
    })
    .then((doubledNumber) => {
      console.log(doubledNumber); 
    });


    function task4() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("First");
          }, 2000);
        });
      }
      
      task4()
        .then((message) => {
          console.log(message); 
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          });
        })
        .then(() => {
          console.log("Second"); 
        });

    function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First");
    }, 2000);
  });
}

task4()
  .then((message) => {
    console.log(message); 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    console.log("Second");
  });


  function task5() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Task 3 failed");
      }, 2000);
    });
  }
  
  task5().catch((error) => {
    console.log(error); 
  });