//JavaScript code (Internal)
			console.log("Hello World!");
			
			//Get reference to paragraph using its id
			const paragraph = document.getElementById("myParagraph");
			
			//Change Text content of the paragraph
			paragraph.textContent = "The paragraph text has been changed by JavaScript!";
			
			//Get button reference
			const button = document.getElementById("myButton");
			let clicked = 0
			
			//event listener to button
			button.addEventListener("click", function(){
				if(clicked ==0){
					paragraph.textContent = "You clicked it!";
					clicked=1;
				}else{
					paragraph.textContent = "You unclicked it!";
					clicked=0;
					}
				});