// basic structure

// (function(){
//   // declare private variabels and functions

//   return {
//     // Declare public variabels and functions

//   }
// })();



// // standard module pattern
// const UICtrl = (function(){
//   let text = 'Hello World';

//   const changeText = function (){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {  
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();

// console.log(UICtrl.text);

// //

// revealing module pattern

const ItemCtrl = (function(){
  let _data = [];

  function _add(item){
    _data.push(item);
    console.log('item Added.....')
  }

  function _get(id){
    return _data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: _add, 
    get: _get
  }

  console.log(_data);
})();

ItemCtrl.add({id: 1, name: 'john'});
let test = ItemCtrl.get(1);

console.log(test);

