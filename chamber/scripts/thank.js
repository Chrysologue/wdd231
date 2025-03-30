const myInfo = new URLSearchParams(window.location.search)
console.log(myInfo.get('level'))

const currentDateTime = new Date().toISOString();
myInfo.set('timestamp', currentDateTime)

document.querySelector('.result').innerHTML = `
    <p>First Name: ${myInfo.get('first')} Last Name: ${myInfo.get('last')}</p>
    <p>Title: ${myInfo.get('title')}</p>
    <p>Email Address: ${myInfo.get('email')}</p>
    <p>Phone Number: ${myInfo.get('number')}</p>
    <p>Organization: ${myInfo.get('organization')}</p>
    <p>Description: ${myInfo.get('description')}</p>
    <p>Level: ${myInfo.get('level')}</p>
    <p>Submission Time: ${myInfo.get('timestamp')}</p>
`;
