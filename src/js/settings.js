const btnOnSubmit = document.getElementById("btnOnSubmit");
const contactForm = document.forms.contactForm;


btnOnSubmit.addEventListener("click", function(e){
  e.preventDefault(e);
  
  var body = {
    name :    contactForm.contactName.value,
    email :   contactForm.contactEmail.value,
    subject : contactForm.contactSubject.value,
    message : contactForm.contactMessage.value
  }
  
  if(name!= "" && email!= "" && subject!= "" && message!= ""){
    try {
      const response = fetch('../send.php', {
      method: 'POST',
      body: JSON.stringify(body), 
      headers: { 'Content-Type': 'application/json' }
    });
    const json = response.json();
    console.log('Succes:', JSON.stringify(json));
    
    } catch (error) {
      console.error('Big Error:', error);
    }
    reset();
  }else{
    console.log("some fiel is empty!")
  }
   
},false)


function resetForm(){
  contactForm.contactName.value = "";
  contactForm.contactEmail.value = "";
  contactForm.contactSubject.value = "";
  contactForm.contactMessage.value = "";
}
