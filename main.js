const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter Your Name/Nickname");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Sakit Mo Ge Cancel☹️";
    }

    if (n.length > 0) {
        alert("You're So Beautiful🦋");
        alert('I Want You So Bad😣');
        alert('Lucky Mo Naman May Nagka Crush Sayo Pogi Na BSIT😌')
        alert('Pleaseee Be Mine🥺' + n);
        main.style.display = 'block';
        break;
    }
}