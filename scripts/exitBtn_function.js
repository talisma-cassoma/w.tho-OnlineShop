var exitButton = document.querySelector('.exitBtn');
let z_Indix= 0;
let changeButtonColorDelay=1000;
		exitButton.addEventListener('click',
		 function waittThreeSeconds(){ //wait 2 seconds while execute the animation 
			 	setTimeout(
					function transition(){ 
			 			var overflowLetfBox = document.querySelector('.overflow_main');
						var overflowRightBox = document.querySelector('.overflow_aside');
						let exitBtnColor = document.querySelectorAll('.pile');
						let asideBox = document.querySelector('.underflow_aside');
						var underflowBox = document.querySelector('.underflow_main');
						
						exitButton.style.zIndex =  z_Indix + 3;
		//se display do overflow_main e do 		overflow_aside for 'none' executa:
				if(overflowRightBox.style.display == "" ){
					
						//*mudar o display do overflow_main e do overflow_aside para "grid" e "block"
					//	overflowLetfBox.style.zIndex =  z_Indix++;
					//	overflowRightBox.style.zIndex = overflowLetfBox.style.zIndex
						overflowLetfBox.style.display = "grid";
						overflowRightBox.style.display = "block";
						overflowLetfBox.classList.add("scale-up-ver-top_transition")
						overflowLetfBox.style.animationFillMode = "forwards"
						overflowRightBox.classList.add("scale-up-ver-bottom_transition");
						overflowRightBox.style.animationFillMode = "forwards"
						//*mudar a cor do exit Button
						setTimeout(()=>{
							for(let i= 0; i<exitBtnColor.length; i++){
								exitBtnColor[i].style.backgroundColor = 'black';}
							},changeButtonColorDelay);	
					
				}		 	
		//senao
			else{
		
						overflowLetfBox.classList.add("scale-up-ver-top_transition")
						overflowLetfBox.style.animationFillMode = "forwards"
						overflowLetfBox.style.animationDirection= "reverse"
						overflowRightBox.classList.add("scale-up-ver-bottom_transition");
						overflowRightBox.style.animationFillMode = "forwards"
						overflowRightBox.style.animationDirection= "reverse"
						//*mudar a cor do exit Button
						setTimeout(()=>{
							for(let i= 0; i<exitBtnColor.length; i++){
								exitBtnColor[i].style.backgroundColor = 'black';}
							},changeButtonColorDelay);
			}
		},500)}) 
