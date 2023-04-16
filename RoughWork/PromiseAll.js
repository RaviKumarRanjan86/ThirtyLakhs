Promise.myall = (values) => {
    const promise = new Promise((resolve,reject) => {
        let result = [];
        let count = 0;
        values.forEach((item,index) => {
            Promise.resolve(item).then(data => {
                result[index] = data;
                count++;
                if(count == values.length){
                    resolve(result);
                }
            })
        })
    }).catch(err => {
        reject(err);
    })
    return promise;
}

const prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(200);
    }, 2000);
})


const prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(100);
    }, 1000);
})

Promise.myall([prom1,prom2]).then(data => {console.log(data)}).catch(err => {console.log(err)})