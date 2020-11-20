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
    let listHtml = document.getElementById("list");

    for (let = i = 0;
    i < list.length;
    i++
)
    {
        chbox = document.getElementById(`${i}`);
        var chbox;
        if (chbox.checked) {
            list[i][1] = "уже в корзине";
        }
        else {
            list[i][1] = "нужно купить";
        }
    }

    cleanHtml()
    for (let = i = 0;
    i < list.length;
    i++
)
    {
        if (list[i][1] == "нужно купить") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : <span class="chea">${list[i][1]}</span></label><br>`);
        } else {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : ${list[i][1]}</label><br>`);
        }

    }

}


function listDone() {
    let listHtml = document.getElementById("list");
    cleanHtml()
    for (let = i = 0;
    i < list.length;
    i++
)
    {
        if (list[i][1] == "нужно купить") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : <span class="chea">${list[i][1]}</span></label><br>`);
        } else {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : ${list[i][1]}</label><br>`);
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
    for (let = i = 0;
    i < list.length;
    i++
)
    {
        if (list[i][1] == "нужно купить") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : <span class="chea">${list[i][1]}</span></label><br>`);
        }
    }
    for (let = i = 0;
    i < list.length;
    i++
)
    {
        if (list[i][1] == "уже в корзине") {
            listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : ${list[i][1]}</label><br>`);
        }
    }
}

function addSome() {
    let listHtml = document.getElementById("list");
    var add = document.getElementById("newPparameter").value;
    var selectYesNo = document.getElementById("yesNo").value;
    if (add != "") {
        if (selectYesNo != "") {
            list.push([add, selectYesNo]);
            console.log(list);
            cleanHtml()
            for (let = i = 0;
            i < list.length;
            i++
        )
            {
                if (list[i][1] == "нужно купить") {
                    listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : <span class="chea">${list[i][1]}</span></label><br>`);
                } else {
                    listHtml.insertAdjacentHTML('beforeend', `<input type="checkbox" checked onchange="checkif(this)" class="checkbox" id="${i}"><label for="${i}">${list[i][0]} : ${list[i][1]}</label><br>`);
                }

            }
        } else {
            cleanHtml()
            listHtml.insertAdjacentHTML('beforeend', `там выше кпопочку прожми купил или нет`)
        }
    } else {
        cleanHtml()
        listHtml.insertAdjacentHTML('beforeend', `забыл написать что купить`)
    }


}
 