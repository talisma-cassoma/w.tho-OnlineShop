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
						overflowLetfBox.style.display = "grid";
						overflowRightBox.style.display = "block";
						overflowLetfBox.classList.add("scale-up-ver-top_transition")
						overflowLetfBox.style.zIndex =  ++z_Indix;
						overflowLetfBox.style.animationFillMode = "forwards"
						overflowRightBox.classList.add("scale-up-ver-bottom_transition");
						overflowRightBox.style.zIndex = z_Indix;
						overflowRightBox.style.animationFillMode = "forwards"
						//*mudar a cor do exit Button
						setTimeout(()=>{
							for(let i= 0; i<exitBtnColor.length; i++){
								exitBtnColor[i].style.backgroundColor = 'black';}
								//remove animations
								underflowBox.classList.remove("under_main-Transition")
								asideBox.classList.remove("underFlow_aside-Transition")
							},changeButtonColorDelay);
							
							//ativar a subtittleTransion
							let subtittles = document.querySelectorAll(".subtittle")
							for(let i= 0; i<subtittles.length; i++){
								subtittles[i].classList.add("textTransition")
								subtittles[i].style.animationDelay =( i-0.5 )+'s';
							}		
				}		 	
		//senao
			else{
	
				underflowBox.classList.add("under_main-Transition");
						underflowBox.style.zIndex =  ++z_Indix;
						underflowBox.style.animationFillMode = "forwards";
					setTimeout(()=>{
					asideBox.classList.add("underFlow_aside-Transition")
						asideBox.style.zIndex = z_Indix;
						asideBox.style.animationFillMode = "backwards";

					//*mudar a cor do exit Button
						setTimeout(()=>{
							for(let i= 0; i<exitBtnColor.length; i++){
								exitBtnColor[i].style.backgroundColor = 'white';
								}
								overflowRightBox.style.display = "";
								//remove animations
								overflowLetfBox.classList.remove("scale-up-ver-top_transition")
								overflowRightBox.classList.remove("scale-up-ver-bottom_transition")
								//desativar a subtittleTransion
							let subtittles = document.querySelectorAll(".subtittle")
							for(let i= 0; i<subtittles.length; i++){
								subtittles[i].classList.remove("textTransition")
							}		
							},changeButtonColorDelay);
					},200)

			}
		},500)}) 
