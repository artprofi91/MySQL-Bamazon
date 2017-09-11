// Challenge #1: Customer View (Minimum Requirement)
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
    console.table(res);
    customer(res);
  });
}


function customer(res) {
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What is the id of the product you would like  to buy? [Quit with Q]"
  }]).then(function(answer) {
    // initializing "correct" to be false (check if you select correct product id or not)
    var correct = false;
    // click q/Q and you can finish app
    if (answer.choice.toUpperCase() === "Q") {
      // the process.exit() method instructs Node.js to terminate the process synchronously with an exit status of the code.
      process.exit();
    }
    // loop through all options
    for (var i = 0; i < res.length; i++) {
      // convert our input string to the integer
      if (res[i].item_id === parseInt(answer.choice)) {
        // if you select correct product id then buy function
        correct = true;
        buy(res[i], answer);
        // break statement breaks the loop and continues executing the code after the loop
        break;
      }
    }
    // if you  didn't chose a product id
    if (!correct) {
      console.log("Not a valid selection!");
      customer(res);
    }
  });
}

function buy(product, productList) {
  inquirer.prompt({
    type: "input",
    name: "quant",
    message: "How many units of the product would you like to buy?"
  }).then(function(answer) {
    // if the selected product is enough then updating product quantity in the bamazon DB, updating the product_sales
    if ((product.stock_quantity - answer.quant) > 0) {
      connection.query("UPDATE products SET stock_quantity='" +
        (product.stock_quantity - answer.quant) + "', product_sales='" +
        (product.product_sales + answer.quant * product.price) +
        "' WHERE item_id='" + product.item_id + "'",
        function() {
          // updating the total_sales for this product department
          connection.query("UPDATE departments SET total_sales=total_sales+'" +
            (answer.quant * product.price) +
            "' WHERE department_name='" +
            product.department_name + "';",
            function() {
              console.log("Sales added.");
            });
          console.log("Product bought. Thank you.");
          bamazon();
        });
    }
    else {
      // if bamazon doesn't have enough product quantity - error
      console.log("Insufficient quantity!");
      customer(productList);
    }
  });
}
