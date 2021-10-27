

var promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'done')
    setTimeout(reject, 300, 'failed')
})

promise.then(function(data){
    console.log('success: ' + data)
})
.catch(function(data){
    console.log('fail: ' + data)
})


