var exitButton = document.querySelector('.exitBtn');

		exitButton.addEventListener('click',
		 function waittThreeSeconds(){ //wait 3 seconds while execute the animation 
			 	setTimeout(
					function transition(){ 
			 			var overflowLetfBox = document.querySelector('.overflow_box.left');
						var overflowRightBox = document.querySelector('.overflow_box.right');
						let exitBtnColor = document.querySelectorAll('.pile');
						let asideBox = document.querySelector('aside');
						var underflowBox = document.querySelector('.underflow_box');
		//se display do overflow_box.left e do 		overflow_box.right for 'none' executa:
				if(overflowLetfBox.style.display == "" ){
						//*mudar o display do overflow_box.left e do overflow_box.right para "grid" e "block"
						overflowLetfBox.style.display = "grid";
						overflowRightBox.style.display = "block";

						//*mudar a cor do exit Button
						setTimeout(()=>{
							for(let i= 0; i<exitBtnColor.length; i++){
								exitBtnColor[i].style.backgroundColor = 'black';}
							},3000);
							setTimeout(()=>{
							//*mudar a cor do aside 
								asideBox.classList.add("asideTransition");
								},2700)		
				}		 	
		//senao
			else{
						//*mudar o display do overflow_box.left e do overflow_box.right para "none"
									overflowLetfBox.style.display = "";
									overflowRightBox.style.display = "";
								//ativate the transition 
									underflowBox.classList.add("transition");
									asideBox.classList.add("transition") 
									
									//*repor a cor do exitButton
										setTimeout(()=>{
										for(let i= 0; i<exitBtnColor.length; i++){
											exitBtnColor[i].style.backgroundColor = 'white';}
										},3000);
									 //*repor a cor do aside
											asideBox.classList.remove("asideTransition")
				}
		},500)}) 
