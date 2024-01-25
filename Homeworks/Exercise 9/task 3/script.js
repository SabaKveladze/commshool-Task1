

function authorization() {
    let begin = prompt("Who's There")
    if (begin == null || begin == "") {
        alert("User cancelled the prompt.")
      } else if( begin != "Admin") {
       alert("I don't Know You")
      } else if(begin == "Admin") {
        let pass = prompt("Enter Your Password: ")
        if (pass == "TheMaster") {
            alert("Welcome")
        }else if (pass == null || pass == "") {
            alert("User cancelled the prompt.")
          } else if(pass != "TheMaster") {
            alert("Wrong Password")
      }
    }
}