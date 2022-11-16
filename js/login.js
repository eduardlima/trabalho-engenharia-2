function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
   const user = JSON.parse(window.localStorage.getItem(email));
    console.log('passou')
   if(user.email === email && user.password === password) {
    localStorage.setItem("acesso", true)
    location.href = "home.html";
    return
    }

   alert('usuario ou senha incorreta')
}

function register(){

    let email = document.getElementById('email').value;
    let password = document.getElementById('senha').value;
    let name = document.getElementById('name').value;
    
    if(!email || !password || !name) {
        alert(`Digite todos os campos`)
    }

    const person = {
      email,
      password,
      name
  }

  const userExists = JSON.parse(window.localStorage.getItem(email));

  if(userExists) {
    alert('Usuário já cadastrado')
    return
  }
  
  window.localStorage.setItem(email, JSON.stringify(person));
  location.href = "home.html";
}