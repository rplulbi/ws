var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AJ1QY8h-rjIX8Yi-rZfP44l3jnmux9z9s.E0%2BYECYxiMmek8qVTzjiBcuEh7IKuXm%2BLpuXi7lYwlA");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cat-fact.herokuapp.com/facts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));