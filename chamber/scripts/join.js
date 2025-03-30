const dialogBox = document.getElementById('dialogBox');
const closeBtn = document.getElementById('closeButton');

const dialogText = document.querySelector('#dialogBox h4');
const list = document.querySelector('#dialogBox .benefits');
const benefit = document.querySelector('.benefit');
const cost = document.querySelector('.cost');

document.getElementById('showBtn1').addEventListener('click', () => {
    list.textContent = "";
    dialogText.textContent = 'Non Profit Membership';
    benefit.textContent = 'Benefits include:';
    const ben1 = document.createElement('li');
    const ben2 = document.createElement('li');
    const ben3 = document.createElement('li');
    ben1.textContent = `You will get a nice plaque with the mayor's stamps on it`;
    ben2.textContent = `You get to ride on a float on Saint Patrick's Day`;
    ben3.textContent = `Receive special recognition at annual events`;
    list.appendChild(ben1);
    list.appendChild(ben2);
    list.appendChild(ben3);
    cost.textContent = 'COST: Free';
    dialogBox.showModal();
});

document.getElementById('showBtn2').addEventListener('click', () => {
    list.textContent = "";
    dialogText.textContent = 'Bronze Membership';
    benefit.textContent = 'Benefits include:';
    const ben1 = document.createElement('li');
    const ben2 = document.createElement('li');
    ben1.textContent = `Access to monthly newsletters`;
    ben2.textContent = `Exclusive discounts on local events and products`;
    list.appendChild(ben1);
    list.appendChild(ben2);
    cost.textContent = 'COST: MGA 500.000/year';
    dialogBox.showModal();
});

document.getElementById('showBtn3').addEventListener('click', () => {
    list.textContent = "";
    dialogText.textContent = 'Silver Membership';
    benefit.textContent = 'Benefits include:';
    const ben1 = document.createElement('li');
    const ben2 = document.createElement('li');
    const ben3 = document.createElement('li');
    ben1.textContent = `Access to monthly newsletters and special events`;
    ben2.textContent = `Priority registration for events`;
    ben3.textContent = `Invitations to private social gatherings`;
    list.appendChild(ben1);
    list.appendChild(ben2);
    list.appendChild(ben3);
    cost.textContent = 'COST: MGA 750.000/year';
    dialogBox.showModal();
});

document.getElementById('showBtn4').addEventListener('click', () => {
    list.textContent = "";
    dialogText.textContent = 'Gold Membership';
    benefit.textContent = 'Benefits include:';
    const ben1 = document.createElement('li');
    const ben2 = document.createElement('li');
    const ben3 = document.createElement('li');
    const ben4 = document.createElement('li');
    ben1.textContent = `All Gold Membership benefits plus VIP access to events`;
    ben2.textContent = `Personalized invitations for all major events`;
    ben3.textContent = `Exclusive meet-and-greets with key speakers and influencers`;
    ben4.textContent = `Complimentary tickets to select high-profile events`;
    list.appendChild(ben1);
    list.appendChild(ben2);
    list.appendChild(ben3);
    list.appendChild(ben4);
    cost.textContent = 'COST: MGA 1.000.000/year';
    dialogBox.showModal();
});

closeBtn.addEventListener('click', () => {
    dialogBox.close();
});

