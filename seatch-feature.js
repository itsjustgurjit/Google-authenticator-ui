let search_box = document.getElementById("search-box");

search_box.addEventListener("input", () => {
  let value = search_box.value;
  let usernameinaccount = document.querySelectorAll(".user-info");

  usernameinaccount.forEach((element) => {
    let username = element.firstElementChild.textContent;
    console.log(element.firstElementChild.textContent);
    if (username.includes(value)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
