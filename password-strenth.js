function checkPassword(password){
let reason = []
let length = password.length
let hasNumber = false
let hasUppercase = false
let hasSpace = password.includes(' ')
for(let cheracter of password){
  if(cheracter>='A' && cheracter<='Z'){
    hasUppercase = true
  }
  if(cheracter>='0' && cheracter<='9'){
    hasNumber = true
  }
}
if(hasNumber===false){
  reason.push('missing number')
}
if(hasUppercase===false){
  reason.push('missing uppercase')
}
if(hasSpace===true){
  reason.push('space found!!!!')
}
let isValid
if(reason.length===0){
isValid = true
}
else{
  isValid = false
}
return{
  valid: true,
  reason
}
}
let output = checkPassword('helloWorld')
console.log(output)