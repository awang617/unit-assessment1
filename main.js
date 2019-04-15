let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let displayNum = document.getElementById('display-count');
document.getElementById('count-number').value = 1;

add.addEventListener('click', function() {
    // e.preventDefault();
    countBy =  document.getElementById('count-number').value;
    var num = parseInt(displayNum.innerHTML);
    num += parseInt(countBy);
    if (num < 0) {
        displayNum.classList.add('negative')
    } else {
        displayNum.classList.remove('negative')
    }
    displayNum.innerHTML = num
})

subtract.addEventListener('click', function() {
    // e.preventDefault();
    countBy =  document.getElementById('count-number').value;
    var num = parseInt(displayNum.innerHTML);
    num -= parseInt(countBy);
    if (num < 0) {
        displayNum.classList.add('negative')
    } else {
        displayNum.classList.remove('negative')
    }
    document.getElementById('display-count').innerHTML = num
})