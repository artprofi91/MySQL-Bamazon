-- Creates the "bamazon" database --
CREATE DATABASE IF NOT EXISTS bamazon;
-- Makes it so all of the following code will affect bamazon --
USE bamazon;
-- Customer View (Minimum Requirement) --
CREATE TABLE products(
  -- item_id (unique id for each product) --
  -- Creates a numeric column called "item_id" which will automatically increment its default value as we create new rows, which cannot contain null --
  item_id INTEGER AUTO_INCREMENT NOT NULL,
  -- product_name (Name of product) --
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(50) NOT NULL,
  -- the price of the product multiplied by the quantity purchased is added to the product's product_sales column --
  -- Makes an numeric(decimal with 2 digits after .) column called "product_sales", which default 0 --
  product_sales DECIMAL(10,2) DEFAULT 0,
  -- department_name --
  -- Makes a string column called "department_name" which cannot contain null --
  department_name VARCHAR(50) NOT NULL,
  -- price (cost to customer) --
  -- Makes an numeric(decimal with 2 digits after .) column called "price", which cannot contain null --
  price DECIMAL(10,2) NOT NULL,
  -- stock_quantity (how much of the product is available in stores) --
  -- Makes a string column called "stock_quantity" which cannot contain null --
  stock_quantity INTEGER(10) NOT NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  primary key(item_id)
);

SELECT * FROM products;

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, product_sales, department_name, price, stock_quantity)
VALUES ("Double Sleeping Bag For Backpacking", 0, "Sports & Outdoors", 57.95, 100),
  ("Dead Sea Mud Mask", 0, "Beauty & Personal Care", 12.95, 110),
  ("Funko POP Movies - Duke", 0, "Toys & Games", 5.63, 120),
  ("Coleman LED String Lights", 0, "Tools & Home Improvement", 19.99, 130),
  ("Cooler Freeze Packs", 0, "Sports & Outdoors", 24.95, 140),
  ("Mosiso Felt Laptop", 0, "Electronics", 21.99, 100),
  ("Al Franken, Giant of the Senate", 0, "Books", 19.60, 500),
  ("It", 0, "Books", 22.13, 600),
  ("FIFA 18 Icon Edition - PS4", 0, "Toys & Games", 99.99, 1000),
  ("Crash Bandicoot - PS4", 0, "Toys & Games", 39.88, 100);


  -- Supervisor View (Final Level) --
  CREATE TABLE departments(
  -- Creates a numeric column called "department_id" which will automatically increment its default value as we create new rows, which cannot contain null --
  department_id INTEGER AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "department_name" which cannot contain null --
  department_name VARCHAR(50) NOT NULL,
  -- (A dummy number you set for each department) --
  -- Makes an numeric(decimal with 2 digits after .) column called "over_head_costs", which cannot contain null --
  over_head_costs DECIMAL(10,2) NOT NULL,
  -- Makes an numeric(decimal with 2 digits after .) column called "total_sales", which cannot contain null --
  total_sales DECIMAL(15,2) NOT NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  primary key(department_id)
);

SELECT * FROM departments;
-- Creates new rows containing data in all named columns --
INSERT INTO departments (department_name, over_head_costs, total_sales)
VALUES ("Sports & Outdoors", 200, 50),
  ("Beauty & Personal Care", 300, 60),
  ("Toys & Games", 40, 70),
  ("Tools & Home Improvement", 500, 80),
  ("Electronics", 600, 90),
  ("Books", 700, 100);

