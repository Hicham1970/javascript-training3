let myArr = [1, 2, 3, 4, 5]; 
const date = new Date(); 
console.log(date.getDay().toString().padStart(4, '0'))

let x = 2; 
let y = 1; 
const z = x + y;  
console.log(z); 

const prm = new Promise((resolve, reject) => {
    setTimeout(() => reject("operation not  a big success!!"), 2000);
})
// prm.then((str) => console.log(str));
// prm.catch((err) => console.log(err));
    


async function displayAsync() {
    try {
        let str = await prm
        console.log(str)
    }
    catch (e) {
        console.log(`Error ${e}`)
     }
    
}
displayAsync();