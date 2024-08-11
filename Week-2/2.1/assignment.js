// Promisified version of setTimeout.

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
// async function example() {
//   console.log("Start");
//   await delay(2000); // waits for 2 seconds
//   console.log("End");
// }

// example();

/*
    setTimeout is a synchronous function i.e. the thread will not wait for the actual ans from the callback function but will proceed further...

    but 

    if we wrap the setTimeout inside a promise it allows us to use the async/await or the .then syntax by which we can make the tread wait until the actual answer is received from the callback function...
*/


// async function fetchData(){
//     try{
//         const response = await fetch("http://localhost:3000/api");
//         if(!response.ok){
//             throw new Error("api response was not ok")
//         }
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error("there was an error", error);
//     }
// }

// fetchData();

// fun fact the fetch api is already a promise based api i.e. it returns a promise that resolves return the object after successful execution






const fsPromise = require('fs/promises');

async function content () {
    const sol = await fsPromise.readFile('book.txt', 'utf-8');
    console.log(sol.toString());
    console.log("data");
}
content();


// We do not need to use promise separately for reading a file as we already have a module known as fs/promise. 












