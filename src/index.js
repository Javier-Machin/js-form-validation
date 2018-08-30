renderForm();

function renderForm() {
  const content = document.getElementById("content");   
  const newForm = document.createElement("form");

  const nameInput =  document.createElement("input");
  const descriptionInput = document.createElement("input");
  const emailInput =  document.createElement("input");
  const emailConfInput =  document.createElement("input");
  const countryInput =  document.createElement("input");
  const passwordInput =  document.createElement("input");
  const passwordConfInput =  document.createElement("input");
  
  const submitBtn = document.createElement("input");

  newForm.classList.add("to-do-form");
  newForm.onsubmit = sendForm; 

  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Enter name";
  nameInput.pattern = ".{3,30}";
  nameInput.title = 'Must be between 3 and 30 characters long';
  nameInput.required = true;
  nameInput.addEventListener("focus", function() {
    this.classList.add("visited");
  });

  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Enter a short description";
  descriptionInput.pattern = ".{3,50}";
  descriptionInput.title = 'Must be between 3 and 50 characters long';
  descriptionInput.required = true;
  descriptionInput.addEventListener("focus", function() {
    this.classList.add("visited");
  }); 

  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Enter email";
  emailInput.pattern = ".{3,50}";
  emailInput.title = 'Must be between 3 and 50 characters long';
  emailInput.required = true;
  emailInput.addEventListener("focus", function() {
    this.classList.add("visited");
  });

  emailConfInput.type = "email";
  emailConfInput.name = "emailconf";
  emailConfInput.placeholder = "Repeat email";
  emailConfInput.title = 'It has to match email field';
  emailConfInput.required = true;
  emailConfInput.addEventListener("focus", function() {
    this.classList.add("visited"); 
    this.pattern = `${emailInput.value}`; 
  });

  countryInput.type = "text";
  countryInput.name = "country";
  countryInput.placeholder = "Enter country";
  countryInput.pattern = ".{3,30}";
  countryInput.title = 'Must be between 3 and 30 characters long';
  countryInput.required = true;
  countryInput.addEventListener("focus", function() { 
    this.classList.add("visited");
  });
  
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "Enter password";
  passwordInput.pattern = ".{3,30}";
  passwordInput.title = 'Must be between 3 and 30 characters long';
  passwordInput.required = true;
  passwordInput.addEventListener("focus", function() { 
    this.classList.add("visited");
  });

  passwordConfInput.type = "password";
  passwordConfInput.name = "passwordconf";
  passwordConfInput.placeholder = "Repeat password";
  passwordConfInput.pattern = ".{3,30}";
  passwordConfInput.title = 'It has to match password field';
  passwordConfInput.required = true;
  passwordConfInput.addEventListener("focus", function() { 
    this.classList.add("visited");
    this.pattern = `${passwordInput.value}`; 
  });

  submitBtn.type = "submit";
  submitBtn.innerHTML = "Create";
  submitBtn.classList.add("submit-form-btn");


  newForm.appendChild(nameInput);
  newForm.appendChild(descriptionInput);
  newForm.appendChild(emailInput);
  newForm.appendChild(emailConfInput);
  newForm.appendChild(countryInput);
  newForm.appendChild(passwordInput);
  newForm.appendChild(passwordConfInput);
  newForm.appendChild(submitBtn);

  content.appendChild(newForm);

  function sendForm() { alert("The form is valid, cheers") };
}