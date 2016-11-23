(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.boughtItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // list by Vijendra
        var toBuy = [
      {
          item_name: 'Cookies',
          item_quantity: 10
      },
      {
          item_name: 'Sugary drinks',
          item_quantity: 25
      },
      {
          item_name: 'Chips',
          item_quantity: 12
      },
      {
          item_name: 'Choclates',
          item_quantity: 7
      },
        {
            item_name: 'Cake',
            item_quantity: 15
        }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuy;
        }

        service.boughtItem = function (itemIndex) {
            boughtItems.push(toBuy[itemIndex]);
            toBuy.splice(itemIndex, 1);
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }

    }

})()