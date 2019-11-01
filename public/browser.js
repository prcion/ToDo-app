document.addEventListener("click", function(e){
  //Delete feature
  if(e.target.classList.contains("delete-me")){
    if(confirm("Do you really want to delete this item?")){
      axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function(){
        e.target.parentElement.parentElement.remove()
      }).catch(function(){
        console.log("try again.")
      })
    }
  }

  //Update feature
  if(e.target.classList.contains("edit-me")){
    let userInput = prompt("Enter your text for updating.", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
    if (userInput){
      axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function(){
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
      }).catch(function(){
        console.log("try again.")
      })
    }
  }
})
