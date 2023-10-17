const accountId = 1434
 let accountEmail ="milan@google.com"
 var accountPassward ="234"
 accountCity="Jaipur"
 let accountState ;
//  accountId =2 not allowed 
accountEmail="milan@.com"
accountPassward="545"
accountCity ="banglore"

 console.log(accountId);
 /*
 prefer not use var
 Bacause of issue in block scope and functional scope.
 */
 console.table([accountId,accountEmail,accountCity,accountPassward,accountState])