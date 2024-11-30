function showForm(form_Id){
    const forms = document.querySelectorAll('.box');
    if(form_Id === 'form'){
        forms.forEach((form)=>{
            form.style.display = 'block';
        });
    }else{
        forms.forEach((form)=>{
            form.style.display = 'none';
        });
    }

    const selectedForm = document.querySelector(`#${form_Id}-container`);
    if(selectedForm) 
        selectedForm.style.display = 'block';
}


let isClicked = false;
function ToggleBtn(){
   let details = document.getElementById('NAV');
   if(isClicked) {
    details.style.display = 'block';
   }else{
    details.style.display = 'none';
   }
   isClicked = !isClicked;
   
}