
let form = document.querySelector('.form');
let alert = document.querySelector('.alert');
function submitForm(){
    if(form.username.value.length < 5){
        alert.innerHTML = "Usernamer most be more than 5 characters";
    }else if(form.password1.value != form.password2.value){
        alert.innerHTML = "Password do not match";
    }else{
        alert.innerHTML = "User login successful";
        alert.style = 'color:green;'
    }
}