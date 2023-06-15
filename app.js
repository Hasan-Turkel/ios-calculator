// *******selectors******

const pFirst = document.querySelector("header p.first");
const pSecond = document.querySelector("header p.second");

const h1 = document.querySelector("header h1");
const container =  document.querySelector(".container");

// console.log(container);

// *******events******

container.addEventListener("click", (e)=>{

    if (e.target.classList.contains("num")) {

        h1.innerText == "0" ?  h1.innerText = e.target.innerText :
        h1.innerText += e.target.innerText
        
    }
    else if (e.target.classList.contains("op") && h1.innerText != "") { 
        pFirst.innerText = h1.innerText;
        pSecond.innerText = e.target.innerText;
        h1.innerText = ""
    }
    else if (e.target.innerText == "AC") {
        pFirst.innerText = "";
        pSecond.innerText = "";
        h1.innerText = ""
    }
    else if (e.target.innerText == "%" & h1.innerText != "") {
        h1.innerText = +h1.innerText / 100;
        pFirst.innerText = ""  
    }
    else if (e.target.innerText == "="){
        calculate()
        pFirst.innerText = "";
        pSecond.innerText = ""
    }
    else if (e.target.innerText == "."){
        h1.innerText != "" ? h1.innerText+="." :  h1.innerText="0."

    }
    else if (e.target.innerText == "±" & h1.innerText != ""){
        h1.innerText = h1.innerText * -1
    }

})

// ******functions*****

const calculate = ()=>{

switch (pSecond.innerText) {
    case "+":
        h1.innerText  = +pFirst.innerText + +h1.innerText  ; 
        break;
    case "-":
        h1.innerText  = +pFirst.innerText - +h1.innerText  ; 
        break;
    case "x":
        h1.innerText  = pFirst.innerText * h1.innerText; 
        break;
    case "÷":
        h1.innerText  = (+pFirst.innerText / +h1.innerText).toFixed(2); 
        break;
    case "%":
        h1.innerText  = +pFirst.innerText / 100; 
        break;
}
}



