var cart = [];
$(document).ready(function () {
    if (localStorage.cart)
    {
        cart = JSON.parse(localStorage.cart);
        showCart();
    }
});
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
                    + item.Amount +"</td></td></tr><tr>";

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
