function logar(){

      let login = document.getElementById('email').value;
      let senha = document.getElementById('senha').value;
      
      console.log(email.value+senha.value)
      if(login == "admin@gmail.com" && senha == "admin"){
        localStorage.setItem("acesso", true)
        location.href = "home.html";
      }else{
        alert('usuario ou senha incorreta')
      }
}