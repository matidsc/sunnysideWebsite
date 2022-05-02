function ToggleMenu() {

  var x = document.getElementById("nav");
    if (x.style.display === "flex") {
      x.style.display = "none";
      document.body.classList.remove('disabledScroll')


    } else {
      x.style.display = "flex";
      document.body.classList.add('disabledScroll')

    }

}