var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://gorest.co.in/public/v2/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));