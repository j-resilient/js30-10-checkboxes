const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if(e.shiftKey /*&& this.checked*/) {
    // do what we please
    // loop through every checkbox every time looking for the
    // first and last checked
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
