

let loginBox=document.createElement("div");
document.body.appendChild(loginBox);
loginBox.classList.add("loginBox");


//input text
let labelForName=document.createElement("label");
labelForName.textContent="Username:";
loginBox.appendChild(labelForName);
labelForName.classList.add("label");

let inputText=document.createElement("input");
inputText.type="text";
inputText.placeholder="Enter your name";
inputText.classList.add("input");
loginBox.appendChild(inputText);

let labelForPassword=document.createElement("label");
labelForPassword.textContent="Password:";
loginBox.appendChild(labelForPassword);
labelForPassword.classList.add("label");

//password input
let inputPassword=document.createElement("input");
inputPassword.type="password";
inputPassword.placeholder="Enter your password";
inputPassword.classList.add("input");
loginBox.appendChild(inputPassword);


//login button
let LoginBtn=document.createElement("button");
LoginBtn.textContent="Login";
loginBox.appendChild(LoginBtn);
LoginBtn.classList.add("loginButton");



