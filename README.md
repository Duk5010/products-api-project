# 🛒 Products API Project

This Node.js script fetches product data from a public API and populates a MySQL database using XAMPP (MariaDB).

## ⚙️ How It Works

- Fetches products from:  
  `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`
- Connects to a MySQL database (via XAMPP)
- Inserts products into a `Products` table — only if it's empty

## 🚀 How to Run

1. **Install dependencies**

   This installs `axios` (for API requests) and `mysql2` (for MySQL connection):

```bash
  npm install
```

2. **Create database in phpMyAdmin**
- Create a DB: `product_db`
- Run:
  ```sql
  CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10,2),
    image VARCHAR(255),
    type VARCHAR(255)
  );
  ```

3. **Edit DB config in `populate.js`**
```js
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'product_db'
};
```

4. **Run the script**
```nginx
node populate.js
```
## Screenshots

![MySql + Xampp](https://i.imgur.com/xfH0wKM.png)

