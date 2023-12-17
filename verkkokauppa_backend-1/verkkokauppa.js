require('dotenv').config()
const axios = require('axios');


const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cors = require('cors');

const multer = require('multer');
const upload = multer({ dest: "uploads/" });

var express = require('express');

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});

const conf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dateStrings: false,
    timezone: '+00:00'
}


/**
 * Gets the products
 * Optional category query parameter for filtering only products from that category
 */
app.get('/products', async (req, res) => {
    try {
        const connection = await mysql.createConnection(conf);

        const category = req.query.category;

        let result;

        if (category) {
            result = await connection.execute("SELECT id, product_name productName, price, image_url imageUrl, category  FROM product WHERE category=?", [category]);
        } else {
            result = await connection.execute("SELECT id, product_name productName, price, image_url imageUrl, category  FROM product");
        }

        //First index in the result contains the rows in an array
        res.json(result[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


/**
 * Gets all the categories
 */
app.get('/categories', async (req, res) => {

    try {
        const connection = await mysql.createConnection(conf);

        const [rows] = await connection.execute("SELECT category_name categoryName, category_description description FROM product_category");

        res.json(rows);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// NIINA HARJU / OMA TOIMINNALLISUUS !!!

//GET-TOIMINTO

// Yhteys tietokantaan
app.get('/employee', async (req, res) => {

    try {
        const connection = await mysql.createConnection(conf);

        const [rows] = await connection.execute("SELECT first_name, last_name, city FROM employee");

        res.json(rows);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//POST TOIMINTO

app.post('/favorites', async (req, res) => {
    const connection = await mysql.createConnection(conf); //yhteys tietokantaan

    try {
        connection.beginTransaction();
        const favorites = req.body.favorites;

        //lisätään suosikkikasvit favorite-taulun favorite_plant-sarakkeeseen
        await connection.execute("INSERT INTO favorite (favorite_plant) VALUES (?)", [favorites]);

        connection.commit();
        res.status(200).send("Favorite added!");

    } catch (err) { //error viesti, jos ei onnistu
        connection.rollback();
        res.status(500).json({ error: err.message });
    }
});


// NIINAN TEKEMÄ OSUUS LOPPUU


//TEKIJÄ LAURA SAVOLAINEN OMA TOIMINNALLISUUS,  GET/POST PARAMETRIT-->

//GET-toiminto
// Yhteys tietokantaan
app.get('/stores', async (req, res) => {
    const connection = await mysql.createConnection(conf);

    try {
        connection.beginTransaction();

        //Haetaan myymälöiden tiedot tietokanta taulusta stores
        const [rows] = await connection.execute("SELECT city, address, zip_code, phone FROM stores");
        console.log(rows);

        connection.commit();
        res.json(rows);
    } catch (err) {
        connection.rollback();
        console.error('Error selecting from stores:', err);
        res.status(500).json({ error: err.message });
    }
});
//POST-toiminto
//Yhteys tietokantaan
app.post('/dreamcity', async (req, res) => {
    const connection = await mysql.createConnection(conf);

    try {
        connection.beginTransaction();
        const dreamCity = req.body.dreamCity;

        //Lisätään toivottu kaupungin nimi dream_city tauluun city_name sarakkeeseen
        await connection.execute("INSERT INTO dream_city (city_name) VALUES (?)", [dreamCity]);

        connection.commit();
        res.status(200).send("We have heard your wishes!");
        //Error viesti, jos ei onnistu
    } catch (err) {
        connection.rollback();
        res.status(500).json({ error: err.message });
    }
});


//LAURA SAVOLAINEN OSUUS LOPPUU!






//LAURA AHOSEN TEKEMÄ OSUUS ALKAA (GET, POST, DELETE): 


//Hakee kaikki uutiskirjeen tilaajat tietokannasta

app.get('/newsletter', async (req, res) => {
    try {
        //luodaan tietokantayhteys
        const connection = await mysql.createConnection(conf);
        //suoritetaan kysely ja haetaan tilaajat
        const [rows] = await connection.execute("SELECT * FROM newsletter_subscribers");
        //palautetaan tilaajien tiedot JSON-muodossa
        res.json(rows);
    } catch (err) {
        //käsitellään virheet ja palautetaan virheviesti JSON-muodossa
        res.status(500).json({ error: err.message });
    }
});


//Lisätään uutiskirjeen tilaajan sähköposti newsletter_subscriber -tauluun
app.post('/newsletter', async (req, res) => {

    //luodaan tietokantayhteys
    const connection = await mysql.createConnection(conf);

    try {
        const email = req.body.email;

        // tietokantatransaktio
        connection.beginTransaction();
        //lisätään uusi tilaaja tietokantaan
        await connection.execute("INSERT INTO newsletter_subscribers (email) VALUES (?)", [email]);

        connection.commit();

        // Palautetaan HTTP 200 OK -vastaus ja ilmoitus onnistuneesta tilauksesta
        res.status(200).send("Subscribed!");

    } catch (err) {
        connection.rollback();
        //käsitellään virheet ja palautetaan virheviesti JSON-muodossa
        res.status(500).json({ error: err.message });
    }
});


// Poistetaan uutiskirjeen tilaaja idn perusteella tietokannasta

app.delete('/newsletter/:id', async (req, res) => {
    const subscriberId = req.params.id;

    //luodaan tietokantayhteys
    const connection = await mysql.createConnection(conf);

    try {
        // tietokantatransaktio
        connection.beginTransaction();

        //poistetaan tilaaja tietokannasta annetun ID:n perusteella
        await connection.execute('DELETE FROM newsletter_subscribers WHERE id = ?', [subscriberId]);

        connection.commit();

        // Palautetaan HTTP 200 OK -vastaus ja ilmoitus onnistuneesta poistosta
        res.status(200).send("Subscriber deleted!");

    } catch (err) {
        connection.rollback();
        //käsitellään virheet ja palautetaan virheviesti JSON-muodossa
        res.status(500).json({ error: err.message });
    }
});



// LAURA AHOSEN TEKEMÄ OSUUS PÄÄTTYYY




app.get('/customer', async (req, res) => {

    //Get the bearer token from authorization header
    const token = req.headers.authorization.split(' ')[1];

    //Verify the token. Verified token contains username
    try {
        const username = jwt.verify(token, process.env.JWT_KEY).username;
        const connection = await mysql.createConnection(conf);
        const [rows] = await connection.execute('SELECT first_name fname, last_name lname, username FROM customer WHERE username=?', [username]);
        res.status(200).json(rows[0]);
    } catch (err) {
        console.log(err.message);
        res.status(403).send('Access forbidden.');
    }
});

/**
 * Adds new product categories
 */
app.post('/categories', async (req, res) => {

    const connection = await mysql.createConnection(conf);

    try {

        connection.beginTransaction();
        const categories = req.body;

        for (const category of categories) {
            await connection.execute("INSERT INTO product_category VALUES (?,?)", [category.categoryName, category.description]);
        }

        connection.commit();
        res.status(200).send("Categories added!");

    } catch (err) {
        connection.rollback();
        res.status(500).json({ error: err.message });
    }
});


/**
 * Adds new products */
app.post('/products', async (req, res) => {

    const connection = await mysql.createConnection(conf);

    try {

        connection.beginTransaction();
        const products = req.body;


        for (const product of products) {
            await connection.execute("INSERT INTO product (product_name, price, image_url,category) VALUES (?,?,?,?)", [product.productName, product.price, product.imageUrl, product.category]);
        }

        connection.commit();
        res.status(200).send("Products added!");

    } catch (err) {
        connection.rollback();
        res.status(500).json({ error: err.message });
    }
});


/**
 * Place an order. 
 */
app.post('/order', async (req, res) => {

    let connection;

    try {
        connection = await mysql.createConnection(conf);
        connection.beginTransaction();

        const order = req.body;
        const date = new Date();

        const [info] = await connection.execute("INSERT INTO customer_order (order_date, customer_id) VALUES (?,?)", [date, order.customerId]);

        const orderId = info.insertId;

        for (const product of order.products) {
            await connection.execute("INSERT INTO order_line (order_id, product_id, quantity) VALUES (?,?,?)", [orderId, product.id, product.quantity]);
        }

        connection.commit();
        res.status(200).json({ orderId: orderId });

    } catch (err) {
        connection.rollback();
        res.status(500).json({ error: err.message });
    }
});


//(Authentication/JWT could be done with middleware also)


/**
 * Registers user. Supports urlencoded and multipart
 */
app.post('/register', upload.none(), async (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const uname = req.body.username;
    const pw = req.body.pw;

    try {
        const connection = await mysql.createConnection(conf);

        const pwHash = await bcrypt.hash(pw, 10);

        const [rows] = await connection.execute('INSERT INTO customer(first_name,last_name,username,pw) VALUES (?,?,?,?)', [fname, lname, uname, pwHash]);

        res.status(200).end();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

/**
 * Checks the username and password and returns jwt authentication token if authorized. 
 * Supports urlencoded or multipart
 */
app.post('/login', upload.none(), async (req, res) => {
    const uname = req.body.username;
    const pw = req.body.pw;


    try {
        const connection = await mysql.createConnection(conf);

        const [rows] = await connection.execute('SELECT pw FROM customer WHERE username=?', [uname]);

        if (rows.length > 0) {
            const isAuth = await bcrypt.compare(pw, rows[0].pw);
            if (isAuth) {
                const token = jwt.sign({ username: uname }, process.env.JWT_KEY);
                res.status(200).json({ jwtToken: token });
            } else {
                res.status(401).end('User not authorized');
            }
        } else {
            res.status(404).send('User not found');
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


/**
 * Gets orders of the customer
 */
app.get('/orders', async (req, res) => {

    //Get the bearer token from authorization header
    const token = req.headers.authorization.split(' ')[1];

    //Verify the token. Verified token contains username
    try {
        const username = jwt.verify(token, process.env.JWT_KEY).username;
        const orders = await getOrders(username);
        res.status(200).json(orders);
    } catch (err) {
        console.log(err.message);
        res.status(403).send('Access forbidden.');
    }
});

async function getOrders(username) {
    try {
        const connection = await mysql.createConnection(conf);
        const [rows] = await connection.execute('SELECT customer_order.order_date AS date, customer_order.id as orderId FROM customer_order INNER JOIN customer ON customer.id = customer_order.customer_id WHERE customer.username=?', [username]);

        let result = [];

        for (const row of rows) {
            const [products] = await connection.execute("SELECT id,product_name productName,price,image_url imageUrl, category, quantity  FROM product INNER JOIN order_line ON order_line.product_id = product.id WHERE order_line.order_id=?", [row.orderId]);

            let order = {
                orderDate: row.date,
                orderId: row.orderId,
                products: products
            }

            result.push(order);
        }


        return result;
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: err.message });
    }
}
