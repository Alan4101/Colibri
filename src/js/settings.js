const btnOnSubmit = document.getElementById("btnOnSubmit");
const contactForm = document.forms.contactForm;


btnOnSubmit.addEventListener("click", function(){
  contactForm.contactName.value = "";
  contactForm.contactEmail.value = "";
  contactForm.contactSubject.value = "";
  contactForm.contactMessage.value = "";
  
},false)
