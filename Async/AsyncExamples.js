
// Async function without the reject:
async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve(console.log("I love You !!"));
  });
    await myPromise;
    
}

// myDisplay();

// Waiting for a Timeout:
async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(console.log("I love You after 3 seconds !!"));
    }, 3000);
  });
  await myPromise;
}

myDisplay();


// waiting for a File :
async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "counter.html");
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile(); // Todo not tested yet