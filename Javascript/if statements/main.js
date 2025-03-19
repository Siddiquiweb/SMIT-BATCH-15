

let userName = prompt("What is your name?");
let age = parseInt(prompt("How old are you?")); // Convert to number
let contact = prompt("What is your phone number?");
let New_password = prompt("Create a password");
let couurse = prompt("What course are you interested in?");

// Name validation
if (userName === "") {
  alert("Please enter your name");
} else {
  alert("Welcome " + userName);
}

// Age validation
if (age < 18) {
  alert("You are too young to sign up");
} else {
  alert("Access granted");
}

// Contact validation
if (contact.length < 10) {
  alert("Please enter a valid number");
} else {
  alert("Thank you");
}

// Password validation
if (New_password.length < 8) {
  alert("Password must be at least 8 characters");
} else {
  alert("Password created");
}

// Course validation
if (couurse === "") {
  alert("Please select a course");
} else {
  alert("Thank you for signing up for " + couurse);
}
