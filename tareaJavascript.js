function calcularLetra(){


		var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
		var numero = document.getElementById("numero").value;
		var abc = document.getElementById("abc").value;

		var patronN = /^([0-9])*$/;
		var patronL = /^[a-zA-Z]$/;



		if(numero.length == 0){ 
			alert("\241Atenci\363n📣📣📣! \n\u27a4Campo DNI no debe estar vacío."); 
			document.getElementById("miForm").reset();

		} else if(numero.length < 8){ 
			alert("\241Atenci\363n📣📣📣! \n\u27a4Campo DNI debe tener 8 dígitos.");  
			document.getElementById("miForm").reset();

		} else if (!(patronN.test(numero))) {
		    alert("\241Atenci\363n📣📣📣! \n\u27a4Campo DNI no permite letra.");
			document.getElementById("miForm").reset();

	  	} 


	  	if(abc.length == 1){  

				if(patronL.test(abc)){

					var resto = numero % 23;  
					var letra = letras [resto];
					var dniv = numero + letra;
					var dnif = numero + abc.toUpperCase();

				

					
						if (dniv != dnif) {
							document.getElementById("dniv").style.color = "green"; 
							document.getElementById("dniv").style.fontSize = "40px"; 
							document.getElementById("dnif").style.color = "red";
		            		document.getElementById("dnif").style.fontSize = "30px"; 
		            		            	
		            	    document.getElementById('dniv').value = dniv;
		                    document.getElementById('dnif').value = dnif;
		                    alert('El DNI ' + numero + ' con letra ' + '""' + abc + '""' + ' NO es correcto 😔☹☹☹😞');
							
						}
						else {
							document.getElementById("dniv").style.color = "green";
							document.getElementById("dniv").style.fontSize = "40px"; 
		            		document.getElementById("dnif").style.color = "green";
		            		document.getElementById("dnif").style.fontSize = "40px"; 

							document.getElementById('dniv').value = dniv;
		                    document.getElementById('dnif').value = dnif;
		                    alert('El DNI  ' + numero + '  con letra ' + '""' + abc  + '""' +' ES correcto 🎆🎆🎆🎉🎉✨✨' );
						}

				}else  {
					alert("\241Atenci\363n📣📣📣! \n\u27a4 Campo letra no admite números.");
	   				document.getElementById("miForm").reset();
   				} 

			}else  {
				alert("\241Atenci\363n📣📣📣! \n\u27a4 Campo letra no puede estar vacio.");
   				document.getElementById("miForm").reset();
   			} 	

					
} 

