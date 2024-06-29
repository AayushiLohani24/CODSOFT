let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
   button.addEventListener('click', (e) => {
      {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
      } 
   })
})
let buttons2 = document.querySelectorAll('.opbutton');
Array.from(buttons2).forEach((button) => {
   button.addEventListener('click', (e) => {
     {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
      }
   })
})
let buttons3 = document.querySelectorAll('.clbutton');
Array.from(buttons3).forEach((button) => {
   button.addEventListener('click', (e) => {
     {
      if(e.target.innerHTML == 'AC') {
      string = " "
      document.querySelector('input').value = string;
   }
     
}})
})
let buttons4 = document.querySelectorAll('.equalBtn');
Array.from(buttons4).forEach((button) => {
   button.addEventListener('click', (e) => {
     {
      if(e.target.innerHTML == '=') {
         string = eval(string);
         document.querySelector('input').value = string;
   }
     
}})
})
