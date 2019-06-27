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
