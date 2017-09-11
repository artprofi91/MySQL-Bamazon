# MySQL-Bamazon

I created an Amazon-like storefront with the MySQL skills. The app takes in orders from customers and depletes stock from the store's inventory. Moreover, I programmed bamazon to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

## Customer View

The Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.



Once the customer has placed the order, my application checks if the store has enough of the product to meet the customer's request.
This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, bamazon shows the customer the total cost of their purchase.

