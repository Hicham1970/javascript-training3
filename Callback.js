/**
 * Normally in javascript the functions run from top to bottom order.
 * task1()
 * task2()
 * task3()
 * but sometimes we need to have the task2 done before the the task1, so we use the setTimeout().
 */

function task1() {
    console.log('Task1'); 
}


function task2() {
  console.log("Task2");
}

// task1();
setTimeout(task1, 5000); // will  run after 5 seconds
task2(); 


// const message = () => {
//     console.log('This message is sent after a delay of 3 seconds'); 
// }
setTimeout(() => {
  console.log("This message is sent after a delay of 3 seconds");
}, 3000); 

