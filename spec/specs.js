describe("BankAccount", function(){
  describe("balance", function(){
    it("will start as 0 when BankAccount is created", function() {
      var testAccount = Object.create(BankAccount);
      expect(testAccount.balance).to.equal(0);
    });
  });

  describe("deposit", function(){
    it("will add amount to BankAccount balance", function(){
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(20.45);
      expect(testAccount.balance).to.equal(20.45);
    });
  });

  describe("withdraw", function(){
    it("will subtract amount from BankAccount balance", function(){
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(30.50);
      testAccount.withdraw(25.00);
      expect(testAccount.balance).to.equal(5.50);
    });
  });
});
