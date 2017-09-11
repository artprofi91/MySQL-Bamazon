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

![3](https://user-images.githubusercontent.com/28790452/30293671-f8129e5e-96ff-11e7-9703-18f2bf2148c7.gif)

### View Products for Sale

If a manager selects `View Products for Sale`, the app lists every available item: the item IDs, names, prices, and quantities.

![1](https://user-images.githubusercontent.com/28790452/30297250-bd808366-970c-11e7-8092-4e4b0835b024.gif)

### View Low Inventory

If a manager selects `View Low Inventory`, then it lists all items with an inventory count lower than 130.

![1](https://user-images.githubusercontent.com/28790452/30297344-1f455c70-970d-11e7-9eaf-27bd5d8c5581.gif)

### Add to Inventory

If a manager selects `Add to Inventory`, your app displays a prompt that lets the manager "add more" of any item currently in the store.

![2](https://user-images.githubusercontent.com/28790452/30297343-1f413c1c-970d-11e7-9940-e20433ad2c33.gif)

### Add New Product
If a manager selects `Add New Product`, it allows the manager to add a completely new product to the store.

![2](https://user-images.githubusercontent.com/28790452/30297249-bd7f2994-970c-11e7-97aa-fb4d33b63ee4.gif)