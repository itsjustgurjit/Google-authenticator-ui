// selectors

let userdatacontainer = document.querySelector(".users-container");
let add_btn = document.querySelector(".add-btn");
let user_info_input = document.querySelector("#user-info-input");
let modal_close_btn = document.querySelector("#modal_close_btn");
let delete_user_data_btn = document.querySelector('#delete-all-user-data-btn')
let user_delelted_modal_close_btn = document.querySelector('.user-deleted-close')
let canvas_close_btn = document.querySelector('.canvas-close-btn')
// on page load

// input by default selected

window.addEventListener('load', () => {
  if(localStorage.getItem('user') != null){
    userdatacontainer.innerHTML = "";
  let array_of_users = localStorage.getItem('user').split(',')
  console.log(array_of_users)
  update_users(array_of_users)
}else{
  userdatacontainer.innerHTML= '<p class="text-center my-3">No user data</p>'
}
});

// delete user data function
delete_user_data_btn.addEventListener('click', () => {
  localStorage.clear()
  userdatacontainer.innerHTML = '<p class="text-center my-3">No user data</p>'
  user_delelted_modal_close_btn.click()
  canvas_close_btn.click()
})

// usre data


user_info_input.addEventListener('keydown',(e)=>{
  if(e.key == 'Enter'){
    add_btn.click()
  }
  else{
    return
  }
})

// add user function
add_btn.addEventListener("click", () => {
  if (user_info_input.value == "") {
    alert("Please enter user info");
    return;
  }
  addthisuser(user_info_input.value);
  if(localStorage.getItem('user') != null){
  array_of_users = localStorage.getItem("user").split(",");
  array_of_users.push(user_info_input.value);
}else{
  array_of_users = [user_info_input.value]
}
  localStorage.setItem("user", array_of_users);
  update_users()
  user_info_input.value = "";
});

function update_users(array_of_users){
  userdatacontainer.innerHTML = "";
  array_of_users = localStorage.getItem("user").split(",");
  array_of_users.forEach((element) => {
    console.log(element)
  })
  array_of_users.forEach((element) => {
    addthisuser(element);
  });
}

function addthisuser(username) {
  let new_user_element = document.createElement("li");
  new_user_element.classList = "list-group-item d-flex justify-content-between";
  new_user_element.innerHTML = `<div class="user-info" style="width: 100%;">
                <p class="fw-normal fs-6 useraccount-name">Instagram: username: ${username}</p>
                <div class="d-flex align-items-center justify-content-between">
                    <h1 class="user-account-code bb-front">238 293</h1>
                    <div class="circle-timer"></div>
                </div>
            </div>`;
  userdatacontainer.appendChild(new_user_element);
  modal_close_btn.click();
  setnewcode();
}

function NewRandomCode() {
  let generated_num =  Math.floor(Math.random() * 1000000);
  return generated_num.toString().padStart(6, "0");
}

function setnewcode() {
  let h1text = document.querySelectorAll(".user-account-code");
  h1text.forEach((element) => {
    element.innerHTML = NewRandomCode();
  });
}

function loading() {
  let percentage = 0;
  let crcolor = "rgb(105, 180, 255)";

  let loadingtimer = setInterval(() => {
    if (percentage > 85) {
      crcolor = "#ef1a1a";
    } else {
      crcolor = "rgb(105, 180, 255)";
    }
    
    let h1text = document.querySelectorAll(".bb-front");
    h1text.forEach((element) => {
      element.style.color = crcolor;
    });

    let circle = document.querySelectorAll(".circle-timer");
    circle.forEach((load_circle) => {
      load_circle.style.background = `conic-gradient(rgba(255, 255, 255, 0) ${percentage}%, ${crcolor} 0`;
    });
    percentage += 2;
    if (percentage == 102) {
        percentage = 0
      setnewcode();
    }
  }, 500);
}

loading();

//online check
window.addEventListener('online', () => {
    let cloudsvg =document.querySelector('.bi-cloud-check')
    cloudsvg.style.color = 'rgb(35, 207, 84)';
  });
  
  window.addEventListener('offline', () => {
    let cloudsvg =document.querySelector('.bi-cloud-check')
    cloudsvg.style.color = 'rgba(171, 171, 171, 0.36)';
  });
  

