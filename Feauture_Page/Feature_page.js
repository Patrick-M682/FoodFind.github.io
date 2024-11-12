function toggleTextBox(textBoxId) {
    var textBox = document.getElementById(textBoxId);
    
    // Check if the text box is currently visible
    if (textBox.style.display === "none" || textBox.style.display === "") {
      // Show the text box
      textBox.style.display = "block";
    } else {
      // Hide the text box
      textBox.style.display = "none";
    }
  }