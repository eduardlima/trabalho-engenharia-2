function logar(){

      let login = document.getElementById('login').value;
      let senha = document.getElementById('senha').value;

      if(login == "admin" && senha == "admin"){
        alert("sucesso");
        location.href = "home.html";
      }else{
        alert('usuario ou senha incorreta')
      }

}