function logar(){

      let login = document.getElementById('email').value;
      let password = document.getElementById('senha').value;
      
      const person = {
        login,
        password
    }
    
    window.localStorage.setItem('user', JSON.stringify(person));


      console.log(email.value+senha.value)
      if(login == "admin@gmail.com" && senha == "admin"){
        localStorage.setItem("acesso", true)
        location.href = "home.html";
      }else{
        alert('usuario ou senha incorreta')
      }
}
function comentario(){

let 






}