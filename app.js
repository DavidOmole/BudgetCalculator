var budgetController = (function() {
  var x = 23;

  return {
    add: function(x) {
      return x + 2;
    }
  };
})();

console.log(budgetController.add(3));
