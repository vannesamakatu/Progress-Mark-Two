let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    let bread = document.getElementById("bread").value;

    if(bread === "Wholewheat"){
        subTotal = subTotal + 10;
    } else if(bread === "Sourdough"){
        subTotal = subTotal + 20;
    } else if(bread === "Ciabatta"){
        subTotal = subTotal + 30;
    }

          // Get Sauce Options
    let sauceOption = document.getElementsByName("Sauces");
    let sauceValue; 
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            sauceValue = sauceOption[i].value
            subTotal = subTotal + +sauceOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subBread: bread,
        subSauce: sauceValue,
        subToppings: topArray,
        subPrice: subTotal
    });

  

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subForm").reset();

}

realTimeCost = () => {
    realTimePrice = 0;

    let bread = document.getElementById("bread").value;
    if(bread === "Wholewheat"){
        realTimePrice = realTimePrice + 10;
    } else if(bread === "Sourdough"){
        realTimePrice = realTimePrice+ 20;
    } else if(bread === "Ciabatta"){
        realTimePrice = realTimePrice + 30;
    }

           
    let sauceOption = document.getElementsByName("sauces");
    
    for(let i = 0; i < baseOption.length; i++){
        if(sauceOption[i].checked){
            realTimePrice = realTimePrice + +sauceOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
   
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    
    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

displayOrder = () => {
    let area = document.getElementById("orders");
    let total = document.getElementById("orderTotal");

    area.innerHTML= "";
    
    let overallTotal = 0;

    for(let i = 0; i < subOrder.length; i++){

        let name = subOrder[i].subName;
        let sauce = subOrder[i].sauce;
        let bread = subOrder[i].subBread;
        let toppings = subOrder[i].subToppings;
        let price = subOrder[i].subPrice;

        overallTotal += price;

        area.innerHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><strong>Bread:</strong>${bread}</p>
                        <p class="card-text"><strong>Sauce:</strong>${sauce}</p>
                        <p class="card-text"><strong>Toppings:</strong>${toppings}</p>
                        <p class="card-text"><strong>Cost:</strong>R${price}.00</p>
                    </div>
                </div>`

        total.innerHTML = "R" + overallTotal + ".00"
        

    }

}

