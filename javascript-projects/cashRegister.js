// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  // set placeholder result
  let result = {status: "", change: []};
  
  // set change variable - need to change this so it is an array
  let change = cash - price;
  console.log(change);

  // set total drawer variable and sum all the values in the cid
  let totalDrawer = 0;
  for (let i = 0; i < cid.length; i++) {
    totalDrawer += cid[i][1]
  };
  console.log(totalDrawer);

  // handle the case if the change value is greater than the totalDrawer value
  if (change > totalDrawer) {
    result[status] = "INSUFFICIENT_FUNDS";
    return result;
  };

  // handle the case if change is equal to totalDrawer
  if (change === totalDrawer) {
    result[status] = "CLOSED";
    result[change] = cid;
    return result;
  };

  if (change < totalDrawer) {
    result[status] = "OPEN";
    // figure out a way to subtract the right amount from the right kind of currency
    // result[change] = ;
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
]);

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01], 
  ["NICKEL", 0], 
  ["DIME", 0], 
  ["QUARTER", 0], 
  ["ONE", 0], 
  ["FIVE", 0], 
  ["TEN", 0], 
  ["TWENTY", 0], 
  ["ONE HUNDRED", 0]
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01], 
  ["NICKEL", 0], 
  ["DIME", 0], 
  ["QUARTER", 0], 
  ["ONE", 0], 
  ["FIVE", 0], 
  ["TEN", 0], 
  ["TWENTY", 0], 
  ["ONE HUNDRED", 0]
]);