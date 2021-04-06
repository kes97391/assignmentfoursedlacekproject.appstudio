//Construct an array with common baby names, as well as an array designated for output. When the form is shown, it will display these baby names in the select. 
//When a specific name is chosen, the form will change to the favBabyNames form.

let BabyNames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]
let FavBabyNames = []

babyNames.onshow=function(){
  for (i = 0; i < BabyNames.length; i++)
    selBabyNames.addItem(BabyNames[i])
}


btnBabyNames.onclick=function(){
  FavBabyNames.push(selBabyNames.text)
  ChangeForm(favBabyNames)
}
