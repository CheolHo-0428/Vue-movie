let a = () => {
    console.log('a')
}

let b = () => {
    console.log('b')
}

a() 
b() 
// a
// b

function a () {
    setTimeout(function () {
        console.log('a')
    }, 1000)
}

let b = () => {
    console.log(b)
}

a()
b()

//b
//a

function a (cb) {
    setTimeout(() => {
        console.log('a')
        cb()
    }, 1000);
}

let b = () => {
  console.log('b')
}

a(function() {
  b()
})
//a
//b





function a (cb) {
  setTimeout(() => {
    console.log('a')
    cb()
  }, 1000)
}

function b (cb) {
  setTimeout(() => {
    console.log('b')
    cb()
  }, 1000)
}

function c (cb) {
  setTimeout(() => {
    console.log('c')
    cb()
  }, 1000)
}

function d (cb) {
  setTimeout(() => {
    console.log('d')
    cb()
  }, 1000)
}

a(function () {
  b(function () {
    c(function () {
      d()
    })
  })
})








function a () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('a')
      resolve()
    }, 1000);
  })
}

function b () {
 return new Promise(resolve => {
  setTimeout(()=>{
    console.log('b')
    resolve()
  }, 1000)  
 }) 
}

function c () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('c')
      resolve()
    })   
  })
}

function d () {
  return new Promise(resolve => {
    setTimeout((resolve)=>{
      console.log('d')
      resolve()
    }, 1000)   
  })
}

a()
  .then(() => b())
  .then(() => c())
  .then(() => d())

async function async() {
  await a()
  await b()
  await c()
  d()
  console.log('done')
}







function a() {
  return new Promise((resolve, reject) => {
    if(isError){
      reject(Error)
    }
    
    setTimeout(()=>{
      console.log('a')
      resolve('done')      
    }, 1000)
  })
}

a()
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error.message)
  })
  .finally(() => {

  })

async function asyncFunc () {
  try {
    const res = await a()
    console.log(res)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('done!!')
  }
}

asyncFunc ()

  