const numbers = document.querySelector('.containernumbers');
let result = document.querySelector('.num-result');

const listArry =
    [
        '1', '2', "3", '4',
        '5', '6', '8', '9',
        '7', '+', 'X', '/'
        , '0', '-', '.', '='
        , 'reset', 'del'
    ]
let clear = () => {
    result.textContent = 0;
}
let delet = () => {
    result.textContent = result.textContent.slice(0, -1);

}
let degite = (v) => {
    result.textContent == 0
        ? result.textContent = v
        : result.textContent += v
}

// let resultSum = () => {

// }

numbers.addEventListener('click', (e) => {
    if (listArry.includes(e.target.textContent)) {
        if (e.target.textContent == 'reset') {
            clear();
        }
        else if (e.target.textContent == 'del') {
            delet();
        }
        // else if (e.target.textContent == '=') {

        // }
        else {
            degite(e.target.textContent);
        }
    }

})