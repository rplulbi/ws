function PostSignUp(nama, email, password, konfirm) {
    var myHeaders = new Headers();
    myHeaders.append("Login", "ronitest");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      nama: nama,
      email: email,
      password: password,
      konfirm: konfirm,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("https://eozhny2l73kpea4.m.pipedream.net", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }


  function PushButton() {
    nama = document.getElementById("nama").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    konfirm = document.getElementById("konfirm").value;
    PostSignUp(nama, email, password, konfirm);
  }