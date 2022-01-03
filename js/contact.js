// Listening the submission

document.getElementById('sendMsg').addEventListener('submit', submitForm);


function submitForm(e) {
      e.preventDefault();

      var name = getInputVal('name');
      var email = getInputVal('email');
      var subject = getElementById('subject');
      var message = getElementById('message');

      console.log(name);
}


function getInputVal(id) {
      return document.getElementById(id).value;
}
