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
  //display all products
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    manager(res);
  });
}

function manager(res) {
  inquirer.prompt([{
    type: "rawlist",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View products for sale", "Add new product", "Add to Inventory", "View low inventory", "Quit"]
  }]).then(function(val) {
    if (val.choice === "View products for sale") {
      console.table(res);
      bamazon();
    }
    else if (val.choice === "Add new product") {
      addProduct();
    }
    else if (val.choice === "Add to Inventory") {
      addInventory(res);
    }
    else if (val.choice === "View low inventory") {
      viewLowInventory();
    }
    else if (val.choice === "Quit") {
      process.exit();
    }
    else {
      console.log("Not a valid selection!");
      bamazon();
    }
  });
}

function viewLowInventory() {
  // display products with quantity less then 130
  connection.query("SELECT * FROM products WHERE stock_quantity <= 130", function(err, res) {
    if (err) throw err;
    // console.log low inventory products
    console.table(res);
    bamazon();
  });
}

function addInventory(res) {
  inquirer.prompt([{
    type: "input",
    name: "product_name",
    message: "What product would you like to update?"
  }, {
    type: "input",
    name: "added",
    message: "How much quantity would you like to add?"
  }]).then(function(val) {
    // check valid product_name
    var correct = false;
    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name === val.product_name) {
        correct = true;
        updateT(val.added, res[i].item_id);
        // break statement breaks the loop and continues executing the code after the loop
        break;
      }
    }
    // if you  didn't chose valid product_name 
    if (correct === false) {
      console.log("Not a valid selection!");
      bamazon();
    }
  });
}

function updateT(valueToAdd, itemId) {
  connection.query("UPDATE products SET stock_quantity=stock_quantity+" +
     valueToAdd + " WHERE item_id=" + itemId + ";",
    function(err, res) {
      if (err) throw err;
      console.log("Quantity have been added into an existing product.");
      bamazon();
    });
}


function addProduct() {
  inquirer.prompt([{
    type: "input",
    name: "product_name",
    message: "What is the name of the product?"
  }, {
    type: "input",
    name: "department_name",
    message: "What department do you want to add the product?"
  }, {
    type: "input",
    name: "price",
    message: "What is the price of the product?"
  }, {
    type: "input",
    name: "quantity",
    message: "How many of the product are available for sale?"
  }]).then(function(val) {
    // creating a new product in the database 
    connection.query("INSERT INTO products (product_name,department_name,price,stock_quantity)" +
      " VALUES ('" + val.product_name + "','" + val.department_name + "'," + val.price + "," + val.quantity + ");",
      function(err, res) {
        if (err) throw err;
        console.log(val.product_name + " Added to Bamazon.");
        bamazon();
      });
  });
}








