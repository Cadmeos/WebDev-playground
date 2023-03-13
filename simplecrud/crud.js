const localStorageKey = 'to-do-list-lanky'

function newTask() {

    let input = document.getElementById('input--new-task');

    // valiation

    if(!input.value) {
        alert('Digite algo')
        
    } else {

        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey,JSON.stringify(values));
        showValue()

    }
}

function showValue() {

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById("to-do-list");
    
    list.innerHTML = '';

    for(let i = 0; i < values.length; i++)  {

        list.innerHTML += `<li>${values[i]['name']}<button>ok</button</li>`
    };

}

showValue()