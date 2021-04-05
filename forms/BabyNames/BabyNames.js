let babyNames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]
let favBabyNames = []

BabyNames.onshow=function(){
  for (i = 0; i <babyNames.length; i++)
    selBabyNames.addItem(babyNames[i])
}


btnBabyNames.onclick=function(){
  favBabyNames.push(selBabyNames.text)
  ChangeForm(favBabyNames)
}
