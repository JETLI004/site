<?PHP

//$json = '{"name":"cust_name","value":"Chidozie Austin"}';

//{"name":"address","value":"43 E 2nd Street, Long Beach,"}';
//decode json array
$json = file_get_contents('php://input');
//$json = filter_input(INPUT_POST, 'cart');

if ($json == ""){

  echo "error";
} else {
$order = json_decode($json, true);

if(!is_array($order))
{
  echo "Json is invalid!";
} else
{
//  echo $order;

//access individual values


echo $order["value"];
echo $order["address"];
echo $order["email"];
echo $order["phone"];
echo $order["waist_size"];
echo $order["Product"];
echo $order["Price"];
echo $order["Qty"];

 }}

?>
