//  This function returns an alert. 
applicationAlert = () => {
    let message = "Welcome to our student enrollment page \r\n Please fill out the entire form in order to sucessfully enroll a student";
    alert(message);
}

//  This code toggles the hidden contact us menu in the about us page.
changeDisplay = () => {
    let x = document.getElementById("contact"); // This returns the id contact.
    let y = document.body; // This targets the webpage itself.

    if (x.style.display === "none") { // If the display is equal to none then this statement will run if the button is clicked on.
        x.style.display = "block";
        y.style.overflow = "hidden"; // This prevents the user from scrolling.
    }

    else { // If the display is not equal to none then this statement will run if the button is clicked on.
        x.style.display = "none";
        y.style.overflow = "scroll";
    }
}

