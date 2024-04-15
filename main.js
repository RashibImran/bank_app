
class bankAccount
{

        accountNumber=12345;
        ownerName="Imran";    
        balance=200;
        
        deposit(amount){
            this.balance+=amount;
            
        }

        withdrow(amount){

            if(amount>this.balance){
                console.log("Insufficient funds")
            }
            else{
                this.balance-=amount;
            }
         }
       

        getBalance()
        {
        return (this.balance);
        }

        displayAccountInfo(){
            console.log("Account Number :"+this.accountNumber);
            console.log("Owner Name :"+this.ownerName);
        }
}
let accountInfo=new bankAccount();
accountInfo.deposit(1000);
accountInfo.withdrow(200);
accountInfo.displayAccountInfo();
console.log("Balance :"+accountInfo.getBalance()+" taka");

