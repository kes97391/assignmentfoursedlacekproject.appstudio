deleteCustomer.onshow=function(){
  drpCustomers.clear()
query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)
  
  if (req.status == 200) {
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
    console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
    
  if (req.status == 0)
    lblErrorMsg.value = "There are no customers in database"
  else {
    let message = ""
    for (i = 0; i < results.length; i++)
      drpCustomers.addItem(message + results[i][1] + "\n")
    }
  } else 
    lblErrorMsg.value = "Error code:" + req.status
}

drpCustomers.onclick=function(s){
  if (typeof(s) == "object")
    return
  else {
    drpCustomers.value = s
    let delCustomerName = drpCustomers.value
    console.log(`${delCustomerName}`)
    
  let found = false 
  for (i = 0; i < results.length; i++) {
    if (delCustomerName == results[i][1]){
      found = true 
      break 
  }
}
if (found == false)
  lblErrorMsg.value = "That customer name is not in the database"
else if (found == true) {
  query = "DELETE FROM customer WHERE name = '" + delCustomerName + "'"
  alert(query)
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=kes97391&query=" + query)
  if (req.status == 200)
    if (req.responseText == 500)
      lblErrorMsg.value = `You have successfully deleted the customer named ${delCustomerName}`
    else 
      lblErrorMsg.value = `There was an issue deleting the customer named ${delCustomerName}`
    else 
      lblErrorMsg.value = `Error: ${req.status}`
    }
  }
}


btnRefresh.onclick=function(){
  btnRefresh.onclick=function(){
    deleteCustomer.reset()
  }
}
