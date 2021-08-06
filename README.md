<!-- ABOUT THE PROJECT -->
## About The Project

This a basic CRUD NodeJS based application which use GraphQL for api layering and MySQL as database.

### Built With

* [NodeJS](https://nodejs.org)
* [GraphQL](https://graphql.org)
* [MySQL](https://mysqlcom)

### Prerequisites

* MySQL
  ```sh
  sudo apt install mysql-server && sudo mysql_secure_installation
  ```

### Setup

1. Clone the github repo
   ```sh
   git clone https://github.com/romit5797/graphql-node-mysql-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create Schema in MySQLfor Linux/Unix/MacOS
   ```sh
   mysql -u root < ./sql/testdb.sql

4. Run the server
   ```sh
   npm start

5. Access the GraphQL interface
   ```sh
   http://localhost:8080/graphql

## Example operations

#### Show all drivers
```js
{
  drivers {
    id,
    name,
    age,
    email,
    phone
  }
}
```

### Filter drivers by age
```js
{
  drivers(age: 24) {
    id,
    name,
    age,
    email,
    phone
  }
}
```

### Gets a driver by its ID
```js
{
  driver(id: 1) {
    id,
    name,
    age,
    email,
    phone
  }
}
```

### Adds a new driver
```js
mutation {
  addDriver(name: "Slater", age:25, email:"slater@gmail.com", phone:"1234567895") {
    id,
    name,
    age,
    email,
    phone
  }
}
```

### Updates a driver
```js
mutation {
  updateDriver(id: 1, name: "Raymond", age:26, email:"raymond@gmail.com", phone:"1234567896") {
    id,
    name,
    age,
    email,
    phone
  }
}
```
