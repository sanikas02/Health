function showForm(type) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");

  if (type === "login") {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  } else {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  }
}