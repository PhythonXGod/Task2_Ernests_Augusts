function hideElements() {
    // hide elements with the ids "ch1", "ch2", and "ch3"
    document.querySelectorAll('#ch1, #ch2, #ch3').forEach(element => {
      element.style.display = 'none';
    });
  
    // show the element with the id "show"
    document.querySelector('#show').style.display = 'block';
  }
  