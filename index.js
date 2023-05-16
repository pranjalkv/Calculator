const n = document.querySelectorAll(".btn").length

for (let i = 0; i < n; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var curr_btn = this.innerHTML
        writeKey(curr_btn);
    })
}
document.addEventListener("keypress", function (event) {
    writeKey(event.key)
})

function writeKey(curr_btn) {
    var press = document.getElementById("ques")
    var s = press.value
    switch (curr_btn) 
    {
        case "0":
            press.value+="0";
            break;

        case "1":
            press.value += "1"
            break;

        case "2":
            press.value += "2"
            break;

        case "3":
            press.value += "3"
            break;

        case "4":
            press.value += "4"
            break;

        case "5":
            press.value += "5"
            break;

        case "6":
            press.value += "6"
            break;

        case "7":
            press.value += "7"
            break;

        case "8":
            press.value += "8"
            break;

        case "9":
            press.value += "9"
            break;

        case "+":
            press.value += "+"
            break;

        case "-":
            press.value += "-"
            break;

        case "/":
            press.value += "/"
            break;

        case "*":
            press.value += "*"
            break;

        case ".":
            press.value+="."
            break;

        case "C":
            press.value = press.value.slice(0, -1)
            break;

        case "AC":
            press.value = "";
            document.getElementById("ans").value="ANS="
            break;
        
        case "%":
            press.value+="%";
            special(s)
            break;

        case "π":
            press.value+="π";
            special(s)
            break;

        case "=":
            document.getElementById("ans").value="="+getAns(s)
            break;

        default:console("press a valid Key")
    }
}
function getAns(s)
{
    s=s.replace("π",Math.PI)
    s=s.replace("%","*.01")
    try{
        let ans=eval(s)
        return ans;
    }
    catch{
        alert("Syntax Error Press")
        document.getElementById("ques").value=""
    }
}