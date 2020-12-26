function visitLink(path) {
    let object = JSON.parse(localStorage.getItem('count_click'));
    if (object === null) {
        init();
    } else {
        object = JSON.parse(localStorage.getItem('count_click'));
        let count;
        if (path === 'Page1') {
            count = object.countPage1;
            object.countPage1 = count + 1;
        } else if (path === 'Page2') {
            count = object.countPage2;
            object.countPage2 = count + 1;
        } else if (path === 'Page3') {
            count = object.countPage3;
            object.countPage3 = count + 1;
        }
        localStorage.setItem('count_click', JSON.stringify(object));
    }
}

function viewResults() {
    let object = JSON.parse(localStorage.getItem('count_click'));

    let list = document.createElement('ul');
    list.innerHTML = '<li>You visited Page1 ' + object.countPage1 + ' time(s)</li>';

}

function init() {
    let data = {
        countPage1: 0,
        countPage2: 0,
        countPage3: 0
    };
    localStorage.setItem('count_click', JSON.stringify(data));
}