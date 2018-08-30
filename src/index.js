renderForm();

function renderForm() {
  const content = document.getElementById("content");   
  const todoForm = document.createElement("form");
  const nameInput =  document.createElement("input");
  const descriptionInput = document.createElement("input");
  const priorityTitle = document.createElement("h3");
  const lowLabel = document.createElement("label");
  const priorityLow = document.createElement("input");
  const normalLabel = document.createElement("label");
  const priorityNormal = document.createElement("input");
  const highLabel = document.createElement("label");
  const priorityHigh = document.createElement("input");
  const submitBtn = document.createElement("input");

  todoForm.classList.add("to-do-form");
  todoForm.onsubmit = sendForm; 

  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Enter name";
  nameInput.pattern = ".{3,30}";
  nameInput.title = 'Must be between 3 and 30 characters long';
  nameInput.required = true;

  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Enter a short description";
  descriptionInput.pattern = ".{3,50}";
  descriptionInput.title = 'Must be between 3 and 50 characters long';
  descriptionInput.required = true;

  priorityTitle.innerHTML = "Priority: ";
  
  lowLabel.innerHTML = "Low";
  priorityLow.type = "radio";
  priorityLow.name = "priority";
  priorityLow.value = "Low";
  priorityLow.classList.add("radio-btn");
  
  normalLabel.innerHTML = "Normal";
  priorityNormal.type = "radio";
  priorityNormal.name = "priority";
  priorityNormal.value = "Normal";
  priorityNormal.checked = true;
  priorityNormal.classList.add("radio-btn");
  
  highLabel.innerHTML = "High";
  priorityHigh.type = "radio";
  priorityHigh.name = "priority";
  priorityHigh.value = "High";
  priorityHigh.classList.add("radio-btn");

  submitBtn.type = "submit";
  submitBtn.innerHTML = "Create";
  submitBtn.classList.add("submit-form-btn");

  todoForm.appendChild(nameInput);
  todoForm.appendChild(descriptionInput);

  todoForm.appendChild(priorityTitle);
  lowLabel.insertBefore(priorityLow, lowLabel.firstChild);
  todoForm.appendChild(lowLabel);
  normalLabel.insertBefore(priorityNormal, normalLabel.firstChild);
  todoForm.appendChild(normalLabel);
  highLabel.insertBefore(priorityHigh, highLabel.firstChild);
  todoForm.appendChild(highLabel);
  
  todoForm.appendChild(submitBtn);

  content.appendChild(todoForm);

  function sendForm() { alert("The form is valid, cheers") };
}

