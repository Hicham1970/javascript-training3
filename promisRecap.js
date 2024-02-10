const prm = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("operation success!!") }, 2000)
    
        .then(str => console.log(str))
        .catch(err =>console.log(err))
})
async function printMessage() {
        
    }
    

    









