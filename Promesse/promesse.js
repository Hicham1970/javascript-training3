new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById("title1").style.visibility = "visible";
    resolve();
  }, 2000);
})
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("title2").style.visibility = "visible";
        resolve();
      }, 4000);
    }).catch(() => {
      console.log("Title 2 failed to load");
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("title3").style.visibility = "visible";
        document.getElementById("title3").style.color = "red";
        resolve();
      }, 8000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("title4").style.visibility = "visible";
        resolve();
      }, 2000);
    });
  });
