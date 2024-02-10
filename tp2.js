let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(console.log("Hello, it is ok")); 
    }, 2000); 
    resolve()
})
prom.then(data => { resolve(data) })
.catch(err => console.error(err))