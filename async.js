function a () {
    console.log('a')
}
function b () {
    console.log('b')
}

a()
b()

function a() {
    setTimeout(function () {
        console.log('a')
    }, 1000)
}

function b() {
    console.log('b')
}

a()
b()


function a(cb) {
    setTimeout(function () {
        console.log('a')
        cb()
    }, 1000)
}

function b() {
    console.log('b')
}

a(function () {
    b()
})
// a
// b

function a(cb) {
    setTimeout(function () {
        console.log('a')
        cb()
    }, 1000)
}

function b(cb) {
    setTimeout(function () {
        console.log('b')
        cb()
    }, 1000)
}

function c(cb) {
    setTimeout(function () {
        console.log('c')
        cb()
    }, 1000)
}

function d(cb) {
    setTimeout(function () {
        console.log('d')
        cb()
    }, 1000)
}

a(function(){
    b(function(){
        c(function(){
            d()
        })
    })
})


function a(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('a')
            resolve()
        }, 1000)
    })
}

function b(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('b')
            resolve()
        }, 1000)
    })
}

a().then(() => {
   return b()
}).then(()=>{
    c()
}) 

