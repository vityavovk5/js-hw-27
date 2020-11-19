// task 1
var list = [
    ["помидорки", "уже в корзине"],
    ["яблоки", "нужно купить"],
    ["картофель", "нужно купить"],
    ["кукуруза", "нужно купить"],
    ["свекла", "нужно купить"],
    ["шпинат", "уже в корзине"],
    ["буряк", "уже в корзине"],
]

function checkif() {
    var chbox;
    chbox=document.getElementsByClassName('checkbox');
    
        if (chbox.checked) {
            list[this] = "ddd";
            console.log(list[this]);
        }
        else {
            list[this] = "dddrrr";
            console.log(list[this]);
        }
}

function listDone() {
    let listHtml = document.getElementById("list");
    cleanHtml()
    for (let = i = 0; i<list.length; i++) {
        if (list[i][1] == "нужно купить") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif()" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : <span class="chea">${list[i][1]}</span></label><br>`);
        } else {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif()" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : ${list[i][1]}</label><br>`);
        }

    }
}
 
function cleanHtml() {
    var element = document.getElementById("list");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function sort() {
    let listHtml = document.getElementById("list");
    cleanHtml()
    for (let = i = 0; i<list.length; i++) {
        if (list[i][1] == "нужно купить") {
            listHtml.insertAdjacentHTML('beforeend', `<p>${list[i][0]} : ${list[i][1]}</p>`);
        }
    }
    for (let = i = 0; i<list.length; i++) {
        if (list[i][1] == "уже в корзине") {
            listHtml.insertAdjacentHTML('beforeend', `<p>${list[i][0]} : ${list[i][1]}</p>`);
        }
    }
}

function addSome() {
    // cleanHtml()
    let listHtml = document.getElementById("list");
    params = document.getElementsByTagName( "input" )[0].value;
    console.log(params);
    // list.push('params');
    list = params;
    
     
    for (var key in list) {
        listHtml.insertAdjacentHTML('beforeend', `<p>${key} : ${list[key]}</p>`);
    }
}
 

// document.getElementById("yearAnswer").innerHTML = "Ну и что то персионер";