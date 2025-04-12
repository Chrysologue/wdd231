const message = document.querySelector('#thankyou > div');
const url = new URLSearchParams(window.location.search)

message.innerHTML = `
<p>First Name: ${url.get('first-name')}</p>
<p>Last Name: ${url.get('last-name')}</p>
<p>Email Address: ${url.get('email')}</p>
<p>Message: ${url.get('message')}</p>
`
