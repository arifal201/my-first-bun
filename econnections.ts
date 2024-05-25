const dbConnections = {
  host: process.env.DATABASE_HOST || 'default_localhost',
  port: process.env.DATABASE_PORT || 3306,
  username: process.env.DATABASE_USERNAME || 'default_username',
  password: process.env.DATABASE_PASSWORD || 'default_password',
  database: process.env.DATABASE_NAME || 'default_db'
}

console.log(dbConnections);