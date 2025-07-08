const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const DOM = {
    c: $('#c'),
    v: $('#v'),
    generate: $('#generate'),
    result: $('#result')  
};

DOM.generate.addEventListener('click', () => {
    const c = DOM.c.value.trim();
    const v = DOM.v.value.trim();
    if (c === '' || v === '') {
        DOM.result.innerText = '子音と母音の両方を入力してください。';
        return;
    }

    const combinations = [];
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < v.length; j++) {
            combinations.push(c[i] + v[j]);
        }
    }

    DOM.result.innerText = combinations.join('\n');
});
