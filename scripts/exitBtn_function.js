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
						let contacts = document.querySelector('.contacts');
						let socialIcon = document.querySelectorAll('.social-icon');
						exitButton.style.zIndex =  z_Indix + 3;
						contacts.style.zIndex = exitButton.style.zIndex;
		//se display do overflow_main e do 		overflow_aside for 'none' executa:
				if(overflowRightBox.style.display == "" ){
					
						//*mudar o display do overflow_main e do overflow_aside para "grid" e "block"
						overflowLetfBox.style.display = "grid";
						overflowRightBox.style.display = "grid";
						//mudar o z-index e adicionar as transitions 
						overflowLetfBox.classList.add("overflow_aside_transition")
						overflowLetfBox.style.zIndex =  ++z_Indix;
						overflowLetfBox.style.animationFillMode = "forwards"
							let asideBoxtext = document.querySelectorAll(".asidetext")
							for(let i= 0; i<asideBoxtext.length; i++){//trasitions do texto
								asideBoxtext[i].classList.add("asidetextTransition")
								asideBoxtext[i].style.animationDelay = (0.9 + i/5) +'s';
								asideBoxtext[0].style.animationDelay = 0.9 +'s';
							}
						overflowRightBox.classList.add("overflow_main_transition");
						overflowRightBox.style.zIndex = z_Indix;
						overflowRightBox.style.animationFillMode = "forwards"
						//*mudar a cor do exit Button
						setTimeout(()=>{
							for(let i= 0; i<exitBtnColor.length; i++){
								exitBtnColor[i].style.backgroundColor = 'black';
								for(let j= 0; j<socialIcon.length; j++){
								socialIcon[j].style.color = 'white';}
								}
								//remove transitions
								underflowBox.classList.remove("under_main-Transition")
								asideBox.classList.remove("underFlow_aside-Transition")
							},changeButtonColorDelay);
							
							//ativar a subtittleTransion
							let subtittles = document.querySelectorAll(".subtittle")
							for(let i= 0; i<subtittles.length; i++){
								subtittles[i].classList.add("textTransition")
								subtittles[i].style.animationDelay =( 0.5 + i/5)+'s';
								subtittles[0].style.animationDelay =0.5 + 's'
							}			
				}		 	
		//senao
			else{
					//mudar o z-index e adicionar as transitions
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
								for(let j= 0; j<socialIcon.length; j++){
								socialIcon[j].style.color = 'black';}
								}
								overflowRightBox.style.display = "";
								//remove transitions
								overflowLetfBox.classList.remove("overflow_aside_transition")
								overflowRightBox.classList.remove("overflow_main_transition")
								//desativar a subtittleTransion
							let subtittles = document.querySelectorAll(".subtittle")
							for(let i= 0; i<subtittles.length; i++){
								subtittles[i].classList.remove("textTransition")
							}
							let asideBoxtext = document.querySelectorAll(".asidetext")
							for(let i= 0; i<asideBoxtext.length; i++){
								asideBoxtext[i].classList.remove("asidetextTransition")}		
							},changeButtonColorDelay);
					},200)

			}
		},500)}) 
