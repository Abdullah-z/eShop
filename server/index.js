const express = require("express");
const app= express();
const mysql= require("mysql2");

const bodyParser = require("body-parser");
const cors = require("cors");

const db= mysql.createPool({
    host : "localhost",
    user: "root",
    password: "12345678",
    database: "store"
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, ()=>{
    const sqlInsert = "Insert into product(name)"
    console.log("Server is running on Port 3000");
});

app.get("/",(req,res)=>{
    res.send("SERVER")
});

app.post("/api/post", (req,res)=>{
    const {name,quantity,price,brand,description,category_id} = req.body;
    const sqlInsert = "INSERT INTO products (name,quantity,price,brand,description,category_id) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [name,quantity,price,brand,description,category_id], (error,result)=>{
        if (error){
            console.log(error);
        }
    })
})




app.post("/shop/category/id", (req,res)=>{
    const {cat} = 2;
    const sqlGetCat= "SELECT * FROM products INNER JOIN categories ON products.category_id=categories.id where category_id="+ cat
    const sqlGet = sqlGetCat
    db.query(sqlGet,(error,result)=>{
        res.send(result);
        if (error){
            console.log(error);
        }
    })
})





// app.get("/api/get", (req,res)=>{
//     const sqlGet =
//     "select * from products"
//     db.query(sqlGet,(error,result)=>{
//         res.send(result);
//     });
// });

app.get("/api/get", (req,res)=>{
    const sqlGet =
    "SELECT * FROM products INNER JOIN categories ON products.category_id=categories.id "
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});

app.get("/api/categories_list", (req,res)=>{
    const sqlGet =
    "SELECT * FROM categories"
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});

