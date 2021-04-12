-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT ProductName, CategoryName from Product
    Join Category as C
    ON Product.CategoryID = C.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

    SELECT Id, CompanyName, OrderDate from "Order" as O
    Join Shipper as C
    ON O.ShipVia = C.Id
    where orderdate < '2012-08-09'
    order by orderdate
   

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

    SELECT Quantity, ProductName from "Order" as O
    Join OrderDetail as OD
    ON O.Id = OD.OrderId
    Join Product as P
    ON OD.ProductId = P.Id
    where O.Id LIKE 10251
    order by productname

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

    SELECT o.Id as OrderId, CompanyName, 
    (FirstName || ' ' || LastName) as employeeName 
    from "Order" as o
    Join Customer as c
    ON o.CustomerId = c.Id
    Join Employee as E
    ON o.EmployeeId = E.id
    
    