renderForm();

function renderForm() {
  const content = document.getElementById("content");   
  const todoForm = document.createElement("form");

  const nameInput =  document.createElement("input");
  const descriptionInput = document.createElement("input");
  const emailInput =  document.createElement("input");
  const emailConfInput =  document.createElement("input");
  const countryInput =  document.createElement("input");
  const passwordInput =  document.createElement("input");
  const passwordConfInput =  document.createElement("input");
  
  const submitBtn = document.createElement("input");

  todoForm.classList.add("to-do-form");
  todoForm.onsubmit = sendForm; 

  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Enter name";
  nameInput.pattern = ".{3,30}";
  nameInput.title = 'Must be between 3 and 30 characters long';
  nameInput.required = true;
  nameInput.onchange = function() { this.classList.add("visited") };

  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Enter a short description";
  descriptionInput.pattern = ".{3,50}";
  descriptionInput.title = 'Must be between 3 and 50 characters long';
  descriptionInput.required = true;
  descriptionInput.onchange = function() { this.classList.add("visited") };

  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Enter email";
  emailInput.pattern = ".{3,50}";
  emailInput.title = 'Must be between 3 and 50 characters long';
  emailInput.required = true;
  emailInput.onchange = function() { this.classList.add("visited") };

  emailConfInput.type = "email";
  emailConfInput.name = "emailconf";
  emailConfInput.placeholder = "Repeat email";
  emailConfInput.title = 'Repeat email';
  emailConfInput.required = true;
  emailConfInput.onchange = function() { this.classList.add("visited") };
  emailConfInput.addEventListener("focus", () => { 
    emailConfInput.pattern = `${emailInput.value}`; 
  });

  countryInput.type = "text";
  countryInput.name = "country";
  countryInput.placeholder = "Enter country";
  countryInput.pattern = ".{3,30}";
  countryInput.title = 'Must be between 3 and 30 characters long';
  countryInput.onchange = function() { this.classList.add("visited") };
  countryInput.required = true;

  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "Enter password";
  passwordInput.pattern = ".{3,30}";
  passwordInput.title = 'Must be between 3 and 30 characters long';
  passwordInput.required = true;
  passwordInput.onchange = function() { this.classList.add("visited") };

  passwordConfInput.type = "password";
  passwordConfInput.name = "passwordconf";
  passwordConfInput.placeholder = "Repeat password";
  passwordConfInput.pattern = ".{3,30}";
  passwordConfInput.title = 'Must be between 3 and 30 characters long';
  passwordConfInput.required = true;
  passwordConfInput.onchange = function() { this.classList.add("visited") };
  passwordConfInput.addEventListener("focus", () => { 
    passwordConfInput.pattern = `${passwordInput.value}`; 
  });

  submitBtn.type = "submit";
  submitBtn.innerHTML = "Create";
  submitBtn.classList.add("submit-form-btn");


  todoForm.appendChild(nameInput);
  todoForm.appendChild(descriptionInput);
  todoForm.appendChild(emailInput);
  todoForm.appendChild(emailConfInput);
  todoForm.appendChild(countryInput);
  todoForm.appendChild(passwordInput);
  todoForm.appendChild(passwordConfInput);
  todoForm.appendChild(submitBtn);

  content.appendChild(todoForm);

  function sendForm() { alert("The form is valid, cheers") };
}