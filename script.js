const button = document.querySelector('button');

const span = document.querySelector('.die');







button.addEventListener('click', () => {

span.classList.add('animation-dado');

setTimeout(() => {

    span.classList.remove('animation-dado') 
},1000);

setTimeout(() => {

const roll1 = Math.floor(Math.random() * 6) + 1;



  document.getElementById('die1').innerText = roll1;

  const div = document.querySelector('div')

  const h2 = document.createElement('h2')

  h2.style.fontFamily = 'sans-serif'


  if(roll1<3){
   
    h2.textContent = 'Bad'

    div.appendChild(h2)

    

  } else if ((roll1<5)) {h2.textContent = 'Good'

  div.appendChild(h2)}

  else if((roll1===5)){h2.textContent = 'Wow' 
  
  div.appendChild(h2)}

  else if((roll1===6)){h2.textContent = 'Lucky' 
  
  div.appendChild(h2)}


  if (div.querySelector('h2')) {
    
    div.replaceChild(h2, div.querySelector('h2'));
 
  } else {
    
    div.appendChild(h2);
  
  }
  

},800);
  

});

    



