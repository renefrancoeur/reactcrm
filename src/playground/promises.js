const promise = new Promise((resolve, reject)=> {
    console.log('promise starts');
    setTimeout(()=> {
        resolve('This is my resolved data');
        //reject('Something went wrong!');
    }, 2500);
});

console.log('before the promise line');

promise.then((data)=> {
    console.log(data)
}).catch((error)=>{
    console.log('error: ', error);
});

console.log('after the promise line');
