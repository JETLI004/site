
    var cart = [];
    $(document).ready(function () {
        if (localStorage.cart)
        {
            cart = JSON.parse(localStorage.cart);
            showCart();
        }
    });

    function addToCart() {
        var price = $("#products").val();
        var name = $("#products option:selected").text();
        var qty = $("#qty").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                saveCart();
                            alert("Item added to cart.");
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
        cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart2() {
        var price = $("#products2").val();
        var name = $("#products2 option:selected").text();
        var qty = $("#qty2").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                saveCart();
                            alert("Item added to cart.");
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
        cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();

    }

    function addToCart3() {
        var price = $("#products3").val();
        var name = $("#products3 option:selected").text();
        var qty = $("#qty3").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                            alert("Item added to cart.");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
        cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart4() {
        var price = $("#products4").val();
        var name = $("#products4 option:selected").text();
        var qty = $("#qty4").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                            alert("Item added to cart.");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
        cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart5() {
        var price = $("#products5").val();
        var name = $("#products5 option:selected").text();
        var qty = $("#qty5").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                            alert("Item added to cart.");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
  cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart6() {
        var price = $("#products6").val();
        var name = $("#products6 option:selected").text();
        var qty = $("#qty6").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                            alert("Item added to cart.");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
          cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart7() {
        var price = $("#products7").val();
        var name = $("#products7 option:selected").text();
        var qty = $("#qty7").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                            alert("Item added to cart.");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
            cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart8() {
        var price = $("#products8").val();
        var name = $("#products8 option:selected").text();
        var qty = $("#qty8").val();
        var amount = parseFloat(qty * price);

        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                            alert("Item added to cart.");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
        cart.push(item);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart9() {
        var price = $("#products9").val();
        var name = $("#products9 option:selected").text();
        var qty = $("#qty9").val();
      var amount = parseFloat(qty * price);
  // console.log(amount);
        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
   //console.log(amount);
                showCart();
                            alert("Item added to cart");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
        cart.push(item);
      //  alert("Item added to cart.);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }

    function addToCart10() {
        var price = $("#products10").val();
        var name = $("#products10 option:selected").text();
        var qty = $("#qty10").val();
var amount = parseFloat(qty * price);
        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
                showCart();
                            alert("Item added to cart.");
                saveCart();
        //        alert("Item added to cart.");
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount};
        cart.push(item);
        saveCart();
        alert("Item added to cart.");
        showCart();
    }


    function addToCart11() {
        var price = $("#products11").val();
        var name = $("#products11 option:selected").text();
        var qty = $("#qty11").val();
      var amount = parseFloat(qty * price);
  // console.log(amount);
        // update qty if product is already present
        for (var i in cart) {
            if(cart[i].Product == name)
            {
                cart[i].Qty = qty;
                cart[i].Amount = amount;
   //console.log(amount);
                showCart();
                            alert("Item added to cart");
                saveCart();
                return;
            }
        }
        // create JavaScript Object
        var item = { Product: name,  Price: price, Qty: qty, Amount: amount };
        cart.push(item);
      //  alert("Item added to cart.);
        saveCart();
                    alert("Item added to cart.");
        showCart();
    }


    function deleteItem(index){
        cart.splice(index,1); // delete item at index
        showCart();
        saveCart();
    }

    function saveCart() {
        if ( window.localStorage)
        {
            localStorage.cart = JSON.stringify(cart);

        }
    }

    function showCart() {
        if (cart.length == 0) {

      //    $("#cart").text("No products yet");
            $("#cart").css("visibility", "hidden");
            return;
        }


      $("#cart").css("visibility", "visible");
    $("#cartBody").empty();
        for (var i in cart) {
            var item = cart[i];
        //    var amount = item.Qty * item.Price;
            var row = "<tr><td>" + item.Product + "</td><td>" +
                         item.Price + "</td><td>" + item.Qty + "</td><td>"
                        + item.Amount +"</td><td>"
                         + "<button onclick='deleteItem(" + i + ")'>Delete</button></td></tr><tr>";

                         $("#cartBody").append(row);

                      //   console.log(amount);
                      //   var subtotal = 0;
                      //  cart.forEach(function(obj){
                      //    subtotal += item.Qty * item.Price;
                      //  });
                      console.log(item.Amount);
                      var subtotal = 0;
                      cart.forEach(function(record) {
                        subtotal += record.Amount;
                      });

                         $("#subtotal").text(subtotal);
                         $("#subtotal2").text(subtotal);
                        //   if(subtotal == "") {
                          //   $("#topay").text("No Orders Yet");
                           //}
                       }

            }



            function showOrder() {

                var order = localStorage.getItem("order");
              if (order.length == 0) {
                  console.log(order);
                    $("#order").css("visibility", "hidden");
                    return;
                   }

              $("#order").css("visibility", "visible");
            $("#orderBody").empty();
                for (var i in order) {
                    var item = order[i];
                //    var amount = item.Qty * item.Price;
                    var row = "<tr><td>" + item.Product + "</td><td>" +
                                 item.Price + "</td><td>" + item.Qty + "</td><td>"
                                + item.Amount +"</td></tr><tr>";

                                 $("#orderBody").append(row);

                              //   console.log(amount);
                              //   var subtotal = 0;
                              //  cart.forEach(function(obj){
                              //    subtotal += item.Qty * item.Price;
                              //  });
                              console.log(item.Amount);
                              var subtotal = 0;
                              cart.forEach(function(record) {
                                subtotal += record.Amount;
                              });

                                 $("#subtotal").text(subtotal);
                                 $("#subtotal2").text(subtotal);
                                //   if(subtotal == "") {
                                  //   $("#topay").text("No Orders Yet");
                                   //}
                               }

                    }



    //send order
    function checkOut(){
      //get stuff from local Storage
      if (localStorage.cart)
      { var getCart = localStorage.getItem("cart");
    //  $("#cartout").text(getCart);
     console.log(getCart);
     //add Total
     var finalOrder = getCart + subtotal;
    // console.log(subtotal);
     //save as order
     localStorage.setItem("order", finalOrder);

    //convert to JSON
     var data1 = JSON.stringify($("form").serializeArray());
    var Jsondata = data1 + getCart;
     console.log(Jsondata);

     //disable submit button
  $("#btn").prop("disabled", true);
  //$("#btnsign").text("submitting
    $("#status").html("Submitting...<progress class='progress is-danger is-30%'></progress>");

    var json_email = "{\"fromAddress\":\"hello@wisonline.com.ng\",\"toAddress\":\"jetli004@gmail.com\", \"ccAddress\":\"jessicaojoneabbah@yahoo.com\",\"subject\":\"New Product Order\",\"content\":\""+ Jsondata +"\"}";

  //  String jsonRequestString = "{\"access_code\" : \""+Jsondata+"\" , ";

    console.log(json_email);
// AJAX code to submit form.
if(json_email) {
$.ajax({
type: "POST",crossDomain: true,
//url: "https://incontinent-swap.000webhostapp.com/auth2_2.php",
//  url: "https://mail.zoho.com/api/accounts/686546688/messages",
data: json_email,
cache: false,
success: function(response) {
//  console.log(response);
if(response) {
//  alert("success!");
//    $("#datahere").html(response);
  window.location.href = "../docs/thankyou.html";

} else {
//  $("#datahere").html(response);
alert("error!");


}

}
});

} else {  $("#datahere").text("no data recieved"); }
} }
