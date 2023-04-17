// As input, it takes an array of Promise
// As output, it provides the first Promise which have passed and neglect the one which have failed
// in case all the promises have failed, it provides an aggregated error

const prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(1)
    },1000)
});

const prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(2000)
    },2000)
});

const prom3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(3000)
    },500)
});



// Promise.any([prom1,prom2,prom3]).then(data => {console.log(data)}).catch(err => {console.log('err' ,err)});

Promise.myAny = (values) => {
    const promise = new Promise((resolve,reject) => {
        let count = 0;
        const result = [];
        values.forEach((item,index) => {
            Promise.resolve(item).then(resolve)
            .catch(err => {
                result[index] = err;
                count+=1;
                if(count == values.length){
                    reject(result);
                }
            })
        })
    }).catch(err => {
        console.log('err ', err);
    })
    return promise;
}

Promise.myAny([prom1,prom2,prom3]).then(data => console.log(data));