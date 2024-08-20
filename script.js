function lightMode() {
    var all = document.querySelectorAll(".light-mode");
    for(var i = 0; i < all.length; i++) {
        // replace element for all[n]
        all[i].classList.toggle("light-dark");  
    }
}


function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }


    
function searchPage() { 
    const searchedTerm = document.getElementById("searchInput").value.toLowerCase(); 
    const pageContent = document.body.innerText.toLowerCase(); 

   
    const matches = pageContent.match(new RegExp(searchedTerm, "g")); 

    
    const resultsDiv = document.getElementById("searchResults"); 
    if (matches) { 
      resultsDiv.innerHTML = `Found ${matches.length} matches for "${searchedTerm}"`; 
    } else { 
      resultsDiv.innerHTML = `No matches found for "${searchedTerm}"`; 
    } 
  } 




  