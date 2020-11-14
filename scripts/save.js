//ativate the transition
								underflowBox.style.zIndex = z_Indix++;
								asideBox.style.zIndex = underflowBox.style.zIndex;
								underflowBox.style.display = "grid";
								asideBox.style.display = "block";
									underflowBox.classList.add("reverse_scale-up-ver-top_transition")
									underflowBox.style.animationDelay = 1 + 's'
									underflowBox.style.animationFillMode = "forwards"
									
									asideBox.classList.add("reverse_scale-up-ver-top_transition")
									asideBox.style.animationDelay = 2 + 's'
									asideBox.style.animationFillMode = "forwards"

									//repor a cor do exitButton
										setTimeout(()=>{
										for(let i= 0; i<exitBtnColor.length; i++){
											exitBtnColor[i].style.backgroundColor = 'white';}
										},changeButtonColorDelay);

										//?????*mudar o display do overflow_main e do overflow_aside para "none"
									overflowLetfBox.style.display = "";
									overflowRightBox.style.display = "";