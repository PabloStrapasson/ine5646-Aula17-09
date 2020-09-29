usuario = {
    login: 'admin',
    senha: 'admin'
  };
  
  var usuarios = [usuario];
  const loginInput = document.getElementById("login");
  const senhaInput = document.getElementById("pass");
  
  loginInput.addEventListener("click", apagaCampo);
  senhaInput.addEventListener("click", apagaCampo);
  
  function apagaCampo(event){
    const input = event.target;
    input.value = '';
  }
  
  function validaLogin(){
    let loginInput = document.getElementById("login").value;
    let senhaInput = document.getElementById("pass").value;
    for (usuario in usuarios){
      if(loginInput === usuarios[usuario].login && senhaInput === usuarios[usuario].senha){
        console.log("cheguei aqui");
        mostrarSecreto();
      }
    }
  }
  
  function mostrarSecreto(){
    const divConteudo = document.getElementById("content-area");
    divConteudo.innerHTML = '';
    
    const conteudoSecreto = document.createElement("P");
    conteudoSecreto.textContent = "Conteudo Secreto";
    
    divConteudo.appendChild(conteudoSecreto);
  }