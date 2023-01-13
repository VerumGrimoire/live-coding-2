


//1. Create a fetchAnswer function and call the API

function fetchAnswer() {
    const input = document.getElementById("input").value;
    fetch(`https://yesno.wtf/api?input=${input}`, {
      method: 'GET'
    })
  
      .then(response => response.json())
      .then(data => {

        
//2. Output the API's response
        document.getElementById("answer").innerHTML=data.answer;
//4. Clear output after 3 seconds
        setTimeout(() => {
            document.getElementById("answer").innerHTML = '';
            document.getElementById("input").value = '';
          }, 3000);
        
      });
    }

//3. Attach fetchAnswer to an event listener
document.getElementById("button").addEventListener("click", fetchAnswer);
document.getElementById("input").addEventListener("enter", fetchAnswer);
function handleKeyEnter(event) {
    if (event.key === 'Enter') {
      fetchAnswer();
    }
  }




  


    

 //5. Optional: add loading/error states
 
