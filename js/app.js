const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear


// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var recipename =document.contactForm.recipename.value;
    var recipe = document.contactForm.recipe.value;
    
    
  // Defining error variables with a default value
    var nameErr = emailErr = recipenameErr = recipeErr  = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if(recipename == "") {
      printError("recipenameErr", "Please enter your recipe name");
    } else{
      printError("recipenameErr","");
      recipenameErr = false;
    }
    if (recipe==""){
      printError("recipeErr", "Please write your recipe");
    } else{
      printError("recipeErr","");
      recipeErr=false;
    }

    if((nameErr || emailErr || recipenameErr) == true) {
      return false;
      }else {
          // Creating a string from input data for preview
          var dataPreview = "You've entered the following details: \n" +
                            "Full Name: " + name + "\n" +
                            "Email Address: " + email + "\n" +
                            "Mobile Number: " + mobile + "\n" +
                            "Country: " + country + "\n" +
                            "Gender: " + gender + "\n";
          if(hobbies.length) {
              dataPreview += "Hobbies: " + hobbies.join(", ");
          }
          // Display input data in a dialog box before submitting the for
          alert(dataPreview);
  }
};