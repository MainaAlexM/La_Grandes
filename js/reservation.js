let delivery = "";

function getPrice(item){
    let price = 0;

    switch(item){
        //breakfasts
        case "power-breakfast":
            price =200;
        break;
        case "power-breakfast":
            price =200;
        break;
        
        //meals
        case "power-breakfast":
            price =200;
        break;
        case "power-breakfast":
            price =200;
        break;

        //drinks
        case "power-breakfast":
            price =200;
        break;
        case "power-breakfast":
            price =200;
        break;

        //snacks
        case "power-breakfast":
            price =200;
        break;
        case "power-breakfast":
            price =200;
        break;

        //defaults
        default:
            price=0;
        break;
    }

    return price;
}

function processOrder( breakfast, meal, drinks, snacks, dname, dphone, daddress){
    this.breakfastName = breakfast;
    this.mealsName = meal;
    this.drinksName = drinks;
    this.snacksName = snacks;

    // meals prices
    this.breakfastPrice = getPrice(breakfast);
    this.mealsPrice = getPrice(meal);
    this.drinksPrice = getPrice(drinks);
    this.snacksPrice = getPrice(snacks);


    // delivery
    this.delivery = delivery;

    // delivery contacts
    this.deliveryname =  dname;
    this.deliveryphone =  dphone;
    this.deliveryaddress=  daddress;
}

$(document).ready(function(){

    $('#home-delivery').click(function() {
        if($('#home-delivery').is(':checked')) 
        { 
            $("#delivery-box").show();
            delivery = "home";
        }         
      });

      $('#pick-up').click(function() {
        if($('#pick-up').is(':checked')) 
        { 
            $("#delivery-box").hide();
            delivery = "pick-up";
        }         
      });

    // this is the place order button event handler.

    //everything runs inside this function
    $("button#checkout").click(function(event){
        //meals names
        const breakfastName = $("#breakfast option:selected").val();
        const mealsName = $("#meal option:selected").val();
        const drinksName = $("#drinks option:selected").val();
        const snacksName = $("#snacks option:selected").val();

        // delivery contacts
        const deliveryname = $("input#dname").val();
        const deliveryphone = $("input#dphone").val();
        const deliveryaddress= $("input#daddress").val();

        let Order = new processOrder(breakfastName, mealsName, drinksName, snacksName, deliveryname, deliveryphone, deliveryaddress);

        
        //add details
        $("#breakfast-cell").append(Order.breakfastName);
        $("#meal-cell").append(Order.mealName);
        $("#drinks-cell").append(Order.drinksName);
        $("#snacks-cell").append(Order.snacksName);

        $("#breakfast-price").append(Order.breakfastPrice);
        $("#meal-price").append(Order.mealsPrice);
        $("#drinks-price").append(Order.drinksPrice);
        $("#snacks-price").append(Order.snacksPrice);

        let totalPriceHolder = Order.breakfastPrice + Order.mealsPrice + Order.drinksPrice + Order.snacksPrice;
        let totalValue = totalPriceHolder + 200;
        
        console.log(totalPriceHolder);
        console.log(totalValue);

        $("#total-price").append(totalPriceHolder);
        $("#total-value").append(totalValue);
        
        // hide pre-order div
        $("#form-input").hide();
        $("#delivery-box").hide();


        // show order-summary div
        $("#order-summary").show();

        //$("#delivery-details").append();

        
        console.log(Order);

        event.preventDefault();
    });
});