# dragonflies-nest-postgres-cra
A portal using nest, postgres and react for dragonflies fans and all odonatologists.

# Installing backend
First enter the folder with package:
> cd .\dragonflies-cra-backend\

Install dependencies listed in package.json:
> npm install

Enter command:
> nest start --watch

The nestjs server starts on port 8080.

# Postgres database
To have clearly working application there is need to have a database.
All the dependencies were installed in backend part, so we need a database and data inside it.
We will have to configure database like it's needed in:
> .\dragonflies-cra-backend\src\common\envs\development.env

We can modify it but ***remember to check database and config settings consistency!***
When we have configured database we need to have filled table *dragonflies* (name depends on Entity name).
The pattern is at:
> .\dragonflies-cra-backend\src\api\dragonfly\dragonfly.entity.ts

Due to ORM we have synchronized table's and object's data structure.

# Installing frontend
First enter the folder with package:
> cd .\dragonflies-cra-frontend\

Then as with backend we need dependencies:
> npm install

When all is ready in node_modules, run react app:
> npm start

React app runs on port 3000 by default
