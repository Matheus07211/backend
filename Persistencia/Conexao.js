import mysql from "mysql2/promise";



export default async function conectar () {
    if (global.pool !== underfined) {
        return await global.pool.getConnection();
    }
    else{ 
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password:  '', 
            port: 3306,           
            database: 'backend',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 360000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
      });  
      
      global.pool = poll;
      return await pool.getConnection();
    }
}