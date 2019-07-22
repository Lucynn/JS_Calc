let screen = document.getElementById('screen');

display = number => {
    screen.value += number;

    if(number === 'C') {
        screen.value = " ";
    }
}

back = () => {
    let num = screen.value;
    let len = num.length -1;
    let newNum = num.substring(0, len);
    screen.value = newNum;
}

add = () => {
    number = screen.value;
    number = eval(number);
    screen.value = number;
}