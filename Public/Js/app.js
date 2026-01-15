const numbers = document.querySelector('.containernumbers');
let result = document.querySelector('.num-result');

const listArry =
    [
        '1', '2', "3", '4',
        '5', '6', '8', '9',
        '7', '+', 'x', '/'
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
    result.textContent =
    (result.textContent === '0' || result.textContent === 'Error')
        ? v
        : result.textContent + v;

}

let check = () => {
    if (
        /x{2,}/.test(result.textContent)
        || /\+{2,}/.test(result.textContent)
        || /-{2,}/.test(result.textContent)
        || /\/{2,}/.test(result.textContent)
        || /\.{2,}/.test(result.textContent)

    ) {
        result.textContent = 'Error';
        return false;
    }
    return true;
}

let cal = () => {
    if (check()) {
        if (result.textContent != 'Error') {
            let num = result.textContent.split(/[+\-x\/]/);
            let operters = result.textContent.match(/[+\-x\/]/g);
            let total = 0;

            if (operters.includes('x') || operters.includes('/')) {
                for (let i = 0; i < operters.length; i++) {

                    if (operters[i] == 'x') {
                        total = parseFloat(num[i]) * parseFloat(num[i + 1]);
                        num[i + 1] = total;
                        num[i] = '';
                        operters[i] = '';
                    }
                    else if (operters[i] == '/') {
                        total = parseFloat(num[i]) / parseFloat(num[i + 1]);
                        num[i + 1] = total;
                        num[i] = '';
                        operters[i] = '';
                    }
                }

            }
            let cleanNumbers = num.filter(e => e != '');
            let cleanOpertors = operters.filter(e => e != '');


            if (operters.includes('-') || operters.includes('+')) {
                for (let i = 0; i < cleanOpertors.length; i++) {
                    if (cleanOpertors[i] == '+') {
                        total = parseFloat(cleanNumbers[i]) + parseFloat(cleanNumbers[i + 1]);
                        cleanNumbers[i + 1] = total;
                        cleanNumbers[i] = '';
                        cleanOpertors[i] = '';
                    }
                    else if (cleanOpertors[i] == '-') {
                        total = parseFloat(cleanNumbers[i]) - parseFloat(cleanNumbers[i + 1]);
                        cleanNumbers[i + 1] = total;
                        cleanNumbers[i] = '';
                        cleanOpertors[i] = '';
                    }



                }

            }
            result.textContent = cleanNumbers[cleanNumbers.length - 1];
            cleanNumbers = [];
            cleanOpertors = [];
            num = [];
            operters = [];

        }
    }


}

numbers.addEventListener('click', (e) => {
    if (listArry.includes(e.target.textContent)) {
        if (e.target.textContent == 'reset') {
            clear();
        }
        else if (e.target.textContent == 'del') {
            delet();
        }
        else if (e.target.textContent == '=') {
            cal();
        }
        else {
            degite(e.target.textContent);
        }
    }

})