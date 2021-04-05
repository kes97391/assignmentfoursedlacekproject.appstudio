//The first snippet operates when the form is shown through the .onshow() event. It uses a for loop to reference the array items from the babyNames form.
//The second snippet operates when a specific dropdown item is clicked. It will reveal the image that was originally hidden.

favBabyNames.onshow=function(){
  drpFavBabyNames.clear()
  console.log(FavBabyNames)
  for (i = 0; i < 5; i++)
    drpFavBabyNames.addItem(BabyNames[i])
    Image1.hidden = true 
}

drpFavBabyNames.onclick=function(s){
  if (typeof(s) == "object"){
    return 
  } else {
    lblFavBabyNames.value = `Your favorite baby name was ${s}.`
    Image1.hidden = false
  }
}
