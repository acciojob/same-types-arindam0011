function isSameType(value1, value2) {
  //your js code here
     let type1= typeof value1;
	 let type2= typeof value2;
	if (Number.isNaN(value1) && Number.isNaN(value2)) {
	    return true;
	  }
	
	return type1 == type2;

}

// do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
