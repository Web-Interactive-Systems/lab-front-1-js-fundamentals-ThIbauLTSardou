// TODO: Fix the errors in the functions below!

const functions = {

  

  sum(a, b) {
    if(typeof a !== "number"  || typeof b !== "number"){
      throw new Error("Les paramètres doivent être des nombre");
    }
    else{
      return (a+b)
    }
    
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    const double = (x) => x * 2

    return array.map(double)
   
    //console.log('array' , array)
    //return array.map(double);
    console.log('double' , double)
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];
    let tab =  input.split(" ")
    tab.forEach(function(x, i)  {
      tab[i] = x.replace(/!+$/, '')
      if (grosMot.includes(tab[i])){
       throw new Error("Il y a un gros mot");
        
      }
    }) 

    
    //console.log(tab)
  },

  nameOfWeekDay(index) {
    const jours = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday','Saturday', 'Sunday'];
    return jours[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

     return array.sort((a, b) => a - b);

  },

  createCounterFunction(i) {
    let count = i

    function toto() {
      count = count + 1
      return count
    }

    return toto;
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    
    let namee = `Hello ${name}.`
    namee += ' Are you well?'

    return namee;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3

    callback(1, 2);
    return null;
  },

  combineArrays(array1, array2) {

    return array1.concat(array2);
  },

  promiseMeMoney() {
    setTimeout(() => {
  console.log("Attend 1 sec");
}, "1000");

    return "send message";
  },
};

module.exports = functions;
