
// 1. Promise.All it takes as input, an Array of Promise 
// 2. Returns the output only when all the promises have been passed.
// 3. In case any of the promises gets rejected that will be provided in the output

// Examples 1

const p1 = Promise.resolve(3);

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("foo");
    },100);
});

Promise.all([p1,p2]).then((values) => {
    console.log(values);
})

// // Example 2

const prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('resolved in 2 seconds')
    },2000);
});

const prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('resolve in 1 seconds')
    },1000);
});

const prom3 = 3

try {
    let result = Promise.all([prom1,prom2,prom3]);
    result.then((data) => console.log(data));
} catch (err){
 console.log('error ', err);
}

// polyfill for Promise.all

Promise.myall = function (values) {
    const promise = new Promise(function (resolve,reject){
        let result = [];
        let total = 0;
        values.forEach((item,index) => {
            Promise.resolve(item).then(res => {
                result[index] = res;
                total++;
                if(total==values.length){
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        })
    })
    return promise;
}

Promise.myall([prom1,prom2,prom3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err);
})

// Source Link :- gfg