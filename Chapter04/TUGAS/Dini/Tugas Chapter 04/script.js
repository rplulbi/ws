var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

hasil=""

fetch("https://gorest.co.in/public/v2/todos", requestOptions)
  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

  function tampilkan(result){
    for (let i = 1; i <= 5; i++) {
        console.log(`${i}. Ini Tugas Chapter 04. Terima Kasih`); 
      }
    hasil=JSON.parse(result);
    //document.getElementById("nama").innerHTML(result);
  }

