const mysql = require('mysql2/promise');
const axios = require('axios');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product_db'
};

async function populateProductsTable() {
    const connection = await mysql.createConnection(dbConfig);

    try {
        const response = await axios.get('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        const products = response.data;

        const [rows] = await connection.execute('SELECT COUNT(*) as count FROM Products');
        if (rows[0].count === 0) {
            for (const product of products) {
                const insertQuery = `
                    INSERT INTO Products (name, price, image, type)
                    VALUES (?, ?, ?, ?)
                `;
                await connection.execute(insertQuery, [
                    product.name,
                    product.price,
                    product.image,
                    product.type
                ]);
            }
            console.log('✅ Products table populated with', products.length, 'products');
        } else {
            console.log('ℹ️ Products table already has data. Skipping insert.');
        }
    } catch (err) {
        console.error('❌ Error populating Products table:', err);
    } finally {
        await connection.end();
    }
}

populateProductsTable();
