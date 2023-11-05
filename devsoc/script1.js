var flag=0;
function clearScreen() {
    document.getElementById("box1").value = "";
}
 
function display(value) {
    if(flag==1)
    {
        clearScreen();
        flag=0;
    }
    document.getElementById("box1").value += value;
}
function display2(value)
{
    document.getElementById("box1").value += value;
    flag=0;
}
 
function calculate() {
    var x = document.getElementById("box1").value;
    var y = eval(x);
    document.getElementById("box1").value = y;
    flag=1;
}
function plusminus() {
    document.getElementById("box1").value *=-1.0; 
}
function percentage()
{
    document.getElementById("box1").value /=100; 
}