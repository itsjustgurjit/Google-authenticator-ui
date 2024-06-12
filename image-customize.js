let profile_img = document.querySelector("#profile-img");
profile_img.addEventListener("click", () => {
  let input_element = document.createElement("input");
  input_element.type = "file";
  input_element.style.display = "none"; // Hide the input element
  document.body.appendChild(input_element); // Append the input to the body
  input_element.click();
  input_element.addEventListener("change", () => {
    let file = input_element.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        profile_img.style.backgroundImage = `url(${e.target.result})`;
        console.log(e.target.result); // Log the base64 string of the image
        localStorage.setItem("image", profile_img.style.backgroundImage);
      };
      reader.readAsDataURL(file);
    }
    document.body.removeChild(input_element); // Remove the input element after use
  });
});

window.addEventListener('load', () => {
    let fav_image = localStorage.getItem('image')
    profile_img.style.backgroundImage = fav_image
})