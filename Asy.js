async function display() {
  // await must be front of any asynchronous function to give it time to be executed
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("title1").style.visibility = "visible";
      resolve();
    }, 2000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("title2").style.visibility = "visible";
      resolve();
    }, 4000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("title3").style.visibility = "visible";
      document.getElementById("title3").style.color = "red";
      resolve();
    }, 8000);
  });
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("title4").style.visibility = "visible";
        document.getElementById("title4").style.color = "green";
        resolve();
      }, 8000);
    });

  setTimeout(() => {
    document.getElementById("title5").style.visibility = "visible";
    document.getElementById("title5").innerHTML = "The Display of the 4 titles was orchestrated by the asynchronous function display() ";
    resolve();
  }, 2000);
}

display();
