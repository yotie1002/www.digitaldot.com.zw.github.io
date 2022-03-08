const mobileMenu = () => {
menu.classList.toggle('is-active');
menulinks.classList.toggle('active'); 
body.classList.toggle('active');

}

menu.addEventListener('click', mobileMenu);
var getphone = document.getElementById("getphone");
getphone.addEventListener("submit", function(event) {
 var phone = document.getElementById("phone").value, 
 tomatch = /^\d{3}-\d{3}-\d{4}$/;
 event.preventDefault();
 if (!tomatch.test(phone)) {
 alert("Invalid phone number entered. Valid format is XXX-XXX-XXXX.");
 }
}, false);
var getemail = document.getElementById("getemail");
getemail.addEventListener("submit", function(event) {
 var email_add = document.getElementById("email").value;
 event.preventDefault();
 if ( (email_add.indexOf("@") >= 0) && (email_add.indexOf(".") >= 0) ) {
 alert("Thank you!");
 } 
 else {
 alert("The @ and . characters are required in the e-mail address.");
 }
 
}, false);

subm = document.getElementById("subm");
subm.addEventListener("click", function(event) {
 var email = document.getElementById("email").value;
 event.preventDefault();
 my_form.submit();
},false);

