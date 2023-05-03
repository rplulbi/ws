function PostSignUp(nama, email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Login", "logindulu");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      nama: nama,
      email: email,
      password: password,
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
  fetch("https://eosb4ls484f7p8.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => GetResponse(result))
    .catch(error => console.log('error', error));
  
  }
  
  
  function PushButton() {
    nama = document.getElementById("nama").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    PostSignUp(nama, email, password);
  
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
  }