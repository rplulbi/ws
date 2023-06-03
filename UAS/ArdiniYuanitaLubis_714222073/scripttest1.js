function PostSignUp(username, password) {
    var myHeaders = new Headers();
    myHeaders.append("Login", "logindulu");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      nama: username,
      password: password,
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
  fetch("https://eo45q4huhltjv41.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => GetResponse(result))
    .catch(error => console.log('error', error));
  
  }
  
  
  function PushButton() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    PostSignUp(username, password);
  
  }
  
  function GetResponse(result){
    document.getElementById("formlogin").innerHTML = result;
  }