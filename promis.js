const promise = new Promise((resolve, reject) => {
  resolve();
});
promise
  .then(() => {
    console.log("First Sequence");
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Second Sequence");
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log("Third Sequence");
    }, 1000);
  })
  .catch(() => {
    console.log("Error", error);
  });

/**the sequence is respected first second and third even the delay of 2s for the Second sequence
 * the Third seq wait for th second one
 */
