var display_1 = document.getElementById("display")

function append(input){
    display_1.value += input;
}

function Clear(){
    display_1.value = "";
}

function calculate(){
    try{
        display_1.value = eval(display_1.value)
    }
    catch(error){
        display_1.value = "Error";
    }
}