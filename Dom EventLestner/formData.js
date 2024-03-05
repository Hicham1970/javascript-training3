//Add an  Event Listener to the submit button
document.querySelector("form").addEventListener("submit", (event) => {
  //Preventing the default behavior of the  Submit Button :
  event.preventDefault();
  console.log(event);
  const form = event.currentTarget();
  const data = new FormData(form);
  const firstName = data.get("firstName");
  if (firstName.length < 2) {
    event.preventDefault();
    alert("Please enter a valid name");
  }
});
