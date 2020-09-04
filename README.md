# Node-Express-Postgres

A frameworkish approach for building API's using NodeJS, ExpressJS and node-postgres.

## What is this?
This is me trying to share the structure I came up with after using the tools above mentioned. It is a sum of
all my efforts of creating an low-level framework that can be easily tweaked to suit anyone's needs.
I tried to replicate the structure and naming of the [Laravel Framework](https://github.com/laravel/laravel), so that JS devs could benefit from it's elegance and simplicity. And also, I tried imitated the way [Mongoose](https://github.com/Automattic/mongoose) names the model's functions and their behavior.

```
  TLDR: it's attempt from a junior dev (I) to create a scaffolding for other people to quickly get API's up and running.
```

## Getting Started

1. Clone this repository.
2. CD into the folder where you cloned the repo.
3. Run "npm install".
4. Run "npm run dev" during the development phase.
5. Run "npm run build" for production. But you must set up a Process Manager ([pm2](http://pm2.keymetrics.io/), [forever](https://www.npmjs.com/package/forever), etc.).

### Prerequisites

You must have [Node](https://nodejs.org/en/download/) and NPM installed (it comes embedded with the Node installer )

```
Head to https://nodejs.org/en/download/ and download it! Prefer LTS versions...
```

### Installing

See the official NodeJS site for instructions.

## Directory Structure
```
.
├── controllers
│   ├── Post.js
│   └── User.js
├── database
│   └── client.js
├── migrations
│   ├── create-database-blog-1000.sql
│   ├── create-table-users-1001.sql
│   └── create-table-posts-1002.sql
├── models
│   ├── Post.js
│   └── User.js
├── node_modules
├── routes
│   ├── api.js
│   └── web.js
├── util
│   ├── helperFunctions.js
│   └── errorMessages.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Testing Endpoints

I would advise you to use [Postman](https://www.getpostman.com/) for testing your endpoints.

### Screenshots
#### For the sake of brevity, i will only test the most common situations. This tests are practically the same for the Post Resource.
#### 1. A list of available endpoints on this project 
![List of Endpoints](https://i.imgur.com/FaQsZSV.png)
#### 2. Making a GET request to test the Server 
![Testing the Server](https://i.imgur.com/INopi9r.png)
#### 3. Making a POST request to the User Resource
##### 3.1 Click on "Body", then select "raw"
![Selecting Body and then Raw](https://i.imgur.com/p1CMJ9P.png)
##### 3.2 Click on "Text" and select "JSON (application/json)"
![Selecting JSON](https://i.imgur.com/qh61ncJ.png)
##### 3.3 Create a JSON with the data to be submitted
![Adding the Request body](https://i.imgur.com/xhvEeMI.png)
##### 3.4 Click on SEND and scroll down to see the result.
![Making the POST Request](https://i.imgur.com/z2urc3D.png)
#### 4. Making a GET ALL request to the User Resource
![GET All users](https://i.imgur.com/uVlgGIz.png)
#### 5. Making a GET ONE request to the User Resource
##### Just add the id after api/users/{insert id here}
![GET ONE user](https://i.imgur.com/0Z54p1M.png)
##### 5.1 Result when you make the request to a user that doesn't exist
![Failed GET ONE user](https://i.imgur.com/BYd0o2K.png)
#### 6. Making an UPDATE request to the User Resource
##### Here you have to add the body of the request like in the POST request and add the id in the URL like in the GET ONE request
![UPDATE user](https://i.imgur.com/BRLZX9J.png)
##### 6.1 Result when you make the request to a user that doesn't exist
![Failed UPDATE user](https://i.imgur.com/VXIbjop.png)
#### 7. Making a DELETE request to the User Resource
##### Here you add the id in the URL like you were about to do a GET ONE request
![DELETE user](https://i.imgur.com/ek8SkJU.png)
##### 7.1 Result when you make the request to a user that doesn't exist
![Failed DELETE user](https://i.imgur.com/ZJi6zrh.png)

## Coding style

This project uses ESLint, Prettier and the Airbnb coding style.

Links for this tools:
[ESLint](https://eslint.org/)
[Prettier](https://prettier.io/)
[Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## Deployment
```
Run "npm run build" after you set up a process manager.
```

## Built With

* [Node](https://nodejs.org/en/) - NodeJS
* [ExpressJS](https://expressjs.com/) - ExpressJS
* [node-postgres](https://node-postgres.com/) - Node-Postgres

## Contributing

Only me. Let me know if you would like to do so :)... 

## Authors

* **Toni Maunde** - *Initial work* - [ToniMaunde](https://github.com/ToniMaunde)

## License

This project is licensed under the MIT License.