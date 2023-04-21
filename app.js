var uiController = (function () {})();

var financeController = (function (){})();

var appController = (function(uiController, financeController){
document.querySelector('.add__btn').addEventListener("click", function(){
  console.log('object :>> clicked');
});
})(uiController, financeController);