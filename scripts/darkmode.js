let body = document.querySelector('body');
var checkbox = document.querySelector('#dark-mode')
		
		checkbox.addEventListener('click', function waitFiveSeconds(){ setTimeout(function changeMode(){
    //If it is checked.
    if(body.style.backgroundColor == 'black'){
        alert('wanna active the ligthmode?');
				checkbox.checked = true;
						let text = document.querySelectorAll('.media__content');
					for(var i=0 ; i<text.length; i++){ 
					text[i].style.color = "black";
					}
						body.style.backgroundColor = 'whitesmoke';
    }
    //If it has been unchecked.
    else{
				 alert('wanna active the nightmode?');
				checkbox.checked = false;
						let text = document.querySelectorAll('.media__content');
					for(var i=0 ; i<text.length; i++){ 
					text[i].style.color = "white";
					}
						body.style.backgroundColor = 'black';				
    }
},1000)})

