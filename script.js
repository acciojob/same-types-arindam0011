function isSameType(value1, value2) {
  
    let type1;
    let type2;
  if(value1.charAt(0) == "'"|| value1.charAt(0) == '"'){
    type1 = "string";
  }
  else{
    type1 = "number";
  }
  if(value2.charAt(0) == "'"|| value2.trim().charAt(0) == '"'){
    type2 = "string";
  }
  else{
    type2 = "number";
  }

  if(type1 == type2){
    return true;
  }
  else{
    return false;
  }



  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
}
return typeof value1 === typeof value2;
  
}
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));