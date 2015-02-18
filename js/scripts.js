var BankAccount = {
  balance: 0.00,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};

$(document).ready(function() {
  var myBankAccount = Object.create(BankAccount);

  $("form#new-account").submit(function(event) {
    event.preventDefault();

    myBankAccount.name = $("input#name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());

    if(initialDeposit){

      myBankAccount.deposit(initialDeposit);

      $("#new-account").hide();
      $("#deposit-form").show();
      $("#withdraw-form").show();
      $("#balance-field").show();

      $(".balance").text(myBankAccount.balance);
    } else {
      alert("Please Enter a Initial Deposit")
    }
  });

  $("form#deposit-form").submit(function(event) {
    event.preventDefault();

    myBankAccount.deposit(
      parseFloat($("input#deposit").val()));

    $("input#deposit").val("");

    $(".balance").text(myBankAccount.balance);
  });

  $("form#withdraw-form").submit(function(event){
    event.preventDefault();

    myBankAccount.withdraw(
      parseFloat($("input#withdraw").val()));

    $("input#withdraw").val("");

    $(".balance").text(myBankAccount.balance);

  });

});
