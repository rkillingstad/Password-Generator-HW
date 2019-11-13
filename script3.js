var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

var createPassword = document.getElementById("create");



createPassword.addEventListener("click", function(event) {
    event.preventDefault();
    generatePassword();

});

console.log(createPassword);

function generatePassword() {

    var length = document.querySelector("#range").value;

    var all = lowercase + uppercase + numbers + special;
    console.log(all);

    var password = "";

    for (var i = 0; i < length; i++) {
        var randomPassword = all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1)));
        password = password + randomPassword;
    }

    document.getElementById("newPassword").value = password;
    console.log(password);
    document.getElementById("length").textContent = "Password Length: " + length;
};

console.log(generatePassword);