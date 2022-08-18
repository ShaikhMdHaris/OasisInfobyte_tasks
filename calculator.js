let output=document.getElementById("output");

function display(num){
    output.value+=num;
}

function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert('Invalid Input');
    }
}

function cl(){
    document.getElementById("output").value='';
}

//to delete the value one by one from backside
function del(){
    output.value=output.value.slice(0,-1);
}
