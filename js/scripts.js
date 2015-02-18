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

      $(".balance").text("$" + myBankAccount.balance.toFixed(2));
    } else {
      alert("Please Enter a Initial Deposit");
      $("input#initial-deposit").val("");
    }
  });

  $("form#deposit-form").submit(function(event) {
    event.preventDefault();
    var newDeposit = parseFloat($("input#deposit").val())

    if (newDeposit) {
      myBankAccount.deposit(newDeposit);
      $(".balance").text("$" + myBankAccount.balance.toFixed(2));
    }
    else {
      alert("Please add a valid dollar amount");
    }

    $("input#deposit").val("");
  });

  $("form#withdraw-form").submit(function(event){
    event.preventDefault();
    var newWithdraw = parseFloat($("input#withdraw").val())

    if (newWithdraw) {
      myBankAccount.withdraw(newWithdraw);
      $(".balance").text("$" + myBankAccount.balance.toFixed(2));
    }
    else {
      alert("Please add a valid dollar amount");
    }

    $("input#withdraw").val("");
  });

});
