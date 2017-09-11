// Challenge #2: Manager View (Next Level)
// require dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// connection to database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  //don't forget to change password!
  password: "1991",
  database: "bamazon"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  bamazon();
});

function bamazon() {
  // Displaying an initial list of products for the user, calling promptManager
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    manager(res);
  });
}

function manager(res) {
  // Giving the user a few options to choose from
  inquirer.prompt([{
    type: "rawlist",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View products for sale", "Add new item", "Add quantity to an existing item", "View low inventory"]
  }]).then(function(val) {
    // Checking to see what option the user decided on, running the appropriate function
    // in response
    if (val.choice === "Add new item") {
      addProduct();
    }
    else if (val.choice === "Add quantity to an existing item") {
      addQuantity(res);
    }
    else if (val.choice === "View low inventory") {
      viewLowInventory();
    }
    else if (val.choice === "View products for sale") {
      bamazon();
    }
    else {
      console.log("Not a valid selection!");
      bamazon();
    }
  });
}

function addProduct() {
  // Asking the user details about the new item they would like to create
  inquirer.prompt([{
    type: "input",
    name: "product_name",
    message: "What is the name of the product?"
  }, {
    type: "input",
    name: "department_name",
    message: "What department does this product fit into?"
  }, {
    type: "input",
    name: "price",
    message: "What is the price of the item?"
  }, {
    type: "input",
    name: "quantity",
    message: "How many of the item are available for sale?"
  }]).then(function(val) {
    // Creating a new product in the database based off of the description the user
    // has provided in the prompt
    connection.query("INSERT INTO products (product_name,department_name,price,stock_quantity)" +
      " VALUES ('" + val.product_name + "','" + val.department_name + "'," + val.price + "," + val.quantity + ");",
      function(err, res) {
        if (err) throw err;
        console.log(val.product_name + " ADDED TO BAMAZON!");
        // When done, re run makeTable, effectively restarting our app
        bamazon();
      });
  });
}

function addQuantity(res) {
  // Prompting the user for details about the product they want to restock
  inquirer.prompt([{
    type: "input",
    name: "product_name",
    message: "What product would you like to update?"
  }, {
    type: "input",
    name: "added",
    message: "How much stock would you like to add?"
  }]).then(function(val) {
    // If the user has chosen a valid product name, update that products stock
    var correct = false;
    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name === val.product_name) {
        correct = true;
        findAndUpdate(val.added, res[i].item_id);
        break;
      }
    }
    // If correct is false here, that means the user tried to restock a product
    // which doesn't currently exist. Bring them back to the makeTable screen
    if (correct === false) {
      console.log("Not a valid selection!");
      bamazon();
    }
  });
}

function findAndUpdate(valueToAdd, itemId) {
  // This function handles restocking a product
  connection.query("UPDATE products SET stock_quantity=stock_quantity+" +
     valueToAdd + " WHERE item_id=" + itemId + ";",
    function(err, res) {
      if (err) throw err;

      // If there weren't any errors, let the user know we added new inventory,
      // run makeTable again
      console.log("Items have been added into your inventory!");
      bamazon();
    });
}

function viewLowInventory() {
  // This function displays any products with fewer than 20 quantities remaining
  connection.query("SELECT * FROM products WHERE stock_quantity <= 20", function(err, res) {
    if (err) throw err;
    // Display the low inventory items, then run makeTable again
    console.table(res);
    bamazon();
  });
}


