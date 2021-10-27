var promise = new Promise((resolve, reject) =>{
    throw Error('fail')
    resolve()
})

promise
    .then(() => console.log('step1'))
    .then(() => console.log('step2'))
    .then(() => {throw Error('fail')})
    .then(() => console.log('step2'))
    .catch(() => console.log('catch1'))
    .then(() => console.log('step3'))
    .catch(() => console.log('catch2'))