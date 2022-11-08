//+
let addButtons=Array.from(document.querySelectorAll("#add-button"))
console.log(addButtons)
//-
let minusButtons=Array.from(document.querySelectorAll("#minus-button"))
console.log(minusButtons)

//quantity
let quantitys=Array.from(document.querySelectorAll("#quantity"))

//price
let prices=Array.from(document.querySelectorAll("#price"))

//delete
let deletes=Array.from(document.querySelectorAll("#delete"))

//parent
let parents=Array.from(document.querySelectorAll("#parent"))

//shoes
let shoes=Array.from(document.querySelectorAll("#shoes"))

let arrOfQuantity=[]
let arrOfPrices=[]

for(let i in quantitys){
    //init
    arrOfQuantity[i]=0;
}

for(let i in prices){
    arrOfPrices[i]= +prices[i].innerHtml;
}

function updateTotal(){
    let total = 0
    for(let i in quantitys)
        total += arrOfPrices[i]*arrOfQuantity[i];
        document.getElementById('totale-price').textContent= `TOTALE PRICE:${total}`
    }
   
    updateTotal()

    //(plus-button)
    for(let i in addButtons){
        addButtons[i].addEventListener("click" , function(){
            arrOfQuantity[i]++;
            quantitys[i].innerHTML = arrOfQuantity[i];
            updateTotal()
        }); 
    }

    //(minus-button)
    for(let i in minusButtons){
        minusButtons[i].addEventListener("click" , function(){
            if(arrOfQuantity[i]>0)
            arrOfQuantity[i]--;
            quantitys[i].innerHTML = arrOfQuantity[i];
            updateTotal()
        }); 
    }

   /*  // Delete Button
    for (let i in deletes){
        deletes[i].addEventListener("click", function(){
            arrOfQuantity[i]=0
            updateTotal();
            parents[i].remove()
        })
    }
 */