let input = document.getElementById("input_Task");
let btnAdd = document.getElementById("btn_Add");
let main = document.getElementById("listArea");
let contador = 0;

function addTask(){
    ++contador;
    var valueInput = input.value;
    if((valueInput !== "") && (valueInput !== null) && (valueInput !== undefined)){
        let newItem = `<div class="item" id=${contador}>
            <div class="item_icon" onclick="checkedTask(${contador})">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item_name">
                ${valueInput}
            </div>
            <div id="itemDelete" class="item_btn">
                <button onclick="deleteTask(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`;

        main.innerHTML += newItem;
        input.value = "";
        input.focus();
    }
}
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        btnAdd.click()
    }
})

function deleteTask(id) {
    var element = document.getElementById(id);
    element.remove();
}


function checkedTask(id){
    var element = document.getElementById(id);
    var classe = element.getAttribute('class');
    var icon = document.getElementById("icone_" + id);
    
    if(classe == "item"){
        element.classList.add('clicked');
        icon.classList.remove('mdi-circle-outline');
        icon.classList.add('mdi-check-circle');
    }else{
        element.classList.remove('clicked');
        icon.classList.remove('mdi-check-circle');
        icon.classList.add('mdi-circle-outline');
        
    }
    

}