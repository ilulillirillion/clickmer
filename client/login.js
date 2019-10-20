// vim: set ft=javascript:


function authenticate() {
  let form_data = new FormData(document.getElementById('login_form'));
  let username = form_data.get(username);
  let password = form_data.get(password);
  
  io.socket.post('authenticate', 
      { username: username, password: password },
      function(response) {:
