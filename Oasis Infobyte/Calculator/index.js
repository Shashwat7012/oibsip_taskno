let string= "";
let buttons = document.querySelectorAll('.button');
let inp=document.querySelector('.input')
Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string;4
            }
            else if(e.target.innerHTML == 'AC'){
                string = "";
                document.querySelector('input').value = string;
            }
            else{
                console.log(e.target)
                string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            }
            // buttonAnimation(e.currentKey);
            
        })
        
        // button.addEventListener('keypress',(e)=>{
        //     console.log(e.target)
        // })
})

    inp.addEventListener('keyup',(e)=>{
        console.log(e.key)
        if(e.key === '='||e.key=='Enter'){
            string = eval(string);
            inp.value = string;
        }
        else if(e.key==='Backspace'){
            string = ""
            inp.value = string;
        }
        else{
            console.log(e.target)
            string = string + e.key;
            inp.value = string;
        }
        // buttonAnimation(e.currentKey);
        
    })
    
    // button.addEventListener('keypress',(e)=>{
    //     console.log(e.target)
    // })
