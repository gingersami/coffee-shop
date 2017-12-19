var coffeeShop = {
  beans: {
    amount:40,
    price:50,
    refillBeans: 40
  },
  money: 500,
  drinkRequirements: {
    latte: {
      beansNeeded:10,
      price:10
    },
    americano: {
      beansNeeded:5,
      price: 5
    },

    doubleShot: {
      beansNeeded:15,
      price:20
    },
    frenchPress: {
      beansNeeded: 12,
      price: 7
    }
  },

  makeDrink: function (drinkType) {
    if(!this.drinkRequirements[drinkType]){
      console.log("Sorry we dont serve "+ drinkType + " here")
    }
      else if(this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType].beansNeeded <= this.beans.amount){
        this.beans.amount -= this.drinkRequirements[drinkType].beansNeeded
      }
        else{
          console.log("Sorry Out of Beans!")
        }
      },
      buySupplies: function(){
        if (this.money >= this.beans.price){
          this.beans.amount += this.beans.refillBeans;
          this.money -= this.beans.price;
          console.log("Beans Refilled")

        }
      },
      buyDrink: function (drinkName) {
       this.makeDrink(drinkName) 
        this.money += coffeeShop.drinkRequirements[drinkName].price;
    }
  }
debugger
    coffeeShop.buyDrink("latte");
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
