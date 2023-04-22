// it takes as input an array of promise
// in output it provides the first array which have either passed or failed

const prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1)
    },1000)
});

const prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(2000)
    },2000)
});

const prom3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(3000)
    },500)
});

 Promise.race([prom1,prom2,prom3]).then(data => {console.log(data)});

// Promise.myRace = (values)=> {
//     return new Promise((resolve,reject) => {
//         values.forEach(item => {
//             Promise.resolve(item).then(data => data).catch(err => {
//                 console.log(err);
//             })
//         })
//     })
// }

// Promise.myRace([prom1,prom2,prom3]).then(data => console.log('data ',data))