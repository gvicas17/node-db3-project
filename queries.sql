-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.productName, c.categoryName
FROM product as p 
JOIN category as c
ON p.categoryId = c.id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT OrderInfo.Id as OrderNumber, Shipper.CompanyName as Shipper
FROM OrderInfo
JOIN Shipper on shipper.id = orderinfo.ShipVia
WHERE OrderInfo.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT product.ProductName, orderdetail.Quantity
FROM product
JOIN orderdetail
ON product.id = orderdetail.ProductId
Where orderdetail.OrderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT OrderInfo.Id as OrderId, Customer.CompanyName, Employee.LastName as EmployeeLastName
FROM OrderInfo
JOIN Customer
ON OrderInfo.CustomerId = Customer.Id
JOIN Employee
ON OrderInfo.EmployeeId = Employee.Id
