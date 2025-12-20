// TODO: Fix the errors in the functions below!

const functions = {
  checkEventLoop() {
    console.log('this is the start');

    setTimeout(() => {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0

    setTimeout(() => {
      console.log('Callback 2: this is a msg from call back');
    }, 0);

    console.log('this is the end');
  },

  executeAfterDelay(callback, delay) {
    setTimeout(callback, delay) 
  },

  executeInOrder(callback1, callback2) {
    setTimeout(callback1)
    setTimeout(callback2) 
  },

  stopInterval(intervalId, callback) {
    clearInterval(intervalId)
    callback()
  },

  executePromise(callback) {
    const reponse = ({status : true, value : 'foo'})


    /*const p = new Promise((resolve) =>{
      resolve(reponse)
    })

    p.then((data) => {
      callback(data)
    })    */

    Promise.resolve(reponse).then((data)=>{
      callback(data)
    })

  },

  async executePromises(callback) {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve('first'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('second'), 500)),
      new Promise((resolve) => setTimeout(() => resolve('third'), 250)),
    ];

    const data = await Promise.all(promises);
    callback(data)

  },
};

module.exports = functions;
