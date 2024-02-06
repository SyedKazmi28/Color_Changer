const box = document.querySelectorAll('.box')
const body = document.querySelector('body')


box.forEach(function(button){
    // console.log(button);
     button.addEventListener('click',function(e){
        // console.log(e.target);
        if(e.target.id == 'box1'){
            body.style.backgroundColor = 'red'
              }
        else if(e.target.id == 'box2'){
            body.style.backgroundColor = 'blue'
        }
        else if(e.target.id == 'box3'){
            body.style.backgroundColor = 'white'
        }
        else if(e.target.id == 'box4'){
            body.style.backgroundColor = 'yellow'
        }
     })
})