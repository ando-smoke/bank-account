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
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var myBankAccount = Object.create(BankAccount);
    myBankAccount.name = $("input#name").val();
    myBankAccount.deposit(
      parseFloat($("input#initial-deposit").val()));

    $("#new-account").hide();
    $("#deposit-form").show();
    $("#withdraw-form").show();
    $("#balance-field").show();

    $(".balance").text(myBankAccount.balance);
  });
});
