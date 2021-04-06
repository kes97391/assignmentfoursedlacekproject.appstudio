//When the form is shown, it populates the dropdown with customer states from Ormond's site's database utilizing a simple SELECT query.
//When a state is clicked, the customers associated with are displayed in a listgroup.
states.onshow=function(){
drpStates.clear()
query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)
  
  if (req.status == 200) {
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
  console.log(`The parsed JSON string is converted to a JS object (an array or arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  
  if (results.length == 0)
    lblErrorMessage.value = "There are no customers in database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    drpStates.addItem(message + results[i][4] + "\n")
    }
  } else 
      lblErrorMessage.value = "Error Code:" + req.status
}

drpStates.onclick=function(s){
  if (typeof(s) == "object")
    return 
  else 
    drpStates.value = s
    let state = drpStates.value 
    
query = "SELECT * FROM customer WHERE state = '" + state + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)
  
  if (req.status == 200) {
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
    console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
    
  if (results.length == 0)
    lblErrorMessage.value = "There are no customers in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    lstgCustomers.addItem(message + results[i][1] + "\n")
    }
  } else 
    lblErrorMessage = "Error Code:" + req.status
}

