# MySQL-Bamazon

I created an Amazon-like storefront with the MySQL skills. The app takes in orders from customers and depletes stock from the store's inventory. Moreover, I programmed bamazon to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

## Customer View

The Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

![1](https://user-images.githubusercontent.com/28790452/30293409-feb37b76-96fe-11e7-8cfa-eb7421cfa5fa.gif)

Once the customer has placed the order, my application checks if the store has enough of the product to meet the customer's request.
This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, bamazon shows the customer the total cost of their purchase.

![2](https://user-images.githubusercontent.com/28790452/30293408-feae3d00-96fe-11e7-86b4-cd0348d2dc29.gif)

## Manager View

The Node application called `bamazonManager.js`. Running this application lists a set of menu options:
* View Products for Sale
* View Low Inventory
* Add to Inventory
* Add New Product
* Quit

![1](https://user-images.githubusercontent.com/28790452/30297719-5efd7a04-970e-11e7-893b-849a8afea339.gif)

### View Products for Sale

If a manager selects `View Products for Sale`, the app lists every available item: the item IDs, names, prices, and quantities.

![2](https://user-images.githubusercontent.com/28790452/30297722-5f07e3ae-970e-11e7-8526-55be17acec64.gif)

### View Low Inventory

If a manager selects `View Low Inventory`, then it lists all items with an inventory count lower than 130.

![5](https://user-images.githubusercontent.com/28790452/30297720-5efdca72-970e-11e7-865d-7c61ccf06403.gif)

### Add to Inventory

If a manager selects `Add to Inventory`, your app displays a prompt that lets the manager "add more" of any item currently in the store.

![4](https://user-images.githubusercontent.com/28790452/30297721-5f041648-970e-11e7-9ce3-61907edd5df6.gif)

### Add New Product
If a manager selects `Add New Product`, it allows the manager to add a completely new product to the store.

![3](https://user-images.githubusercontent.com/28790452/30297718-5efc4b66-970e-11e7-81e2-c72d7e28c270.gif)