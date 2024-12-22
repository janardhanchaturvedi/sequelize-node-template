This is a base nodejs Project template , which anyone can use as it has been prepared, by keeping some of the most important code prnciple and project management recommendations. Feel free to change anythin.

`src` -> Inside the src folder all the actual source cide regarding the project will reside , this not include anykind of tests

Let's take a look inside the `src` folder

- `config` -> In this folder anything and everthing regarding any configuration of setup of library or module will be done . for example : setting up `dotenv` so that we can use then environment variables any where in a cleaner fashion , this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningfull logs , so configuration for this library should also be done here 

- `routes` -> In the routes folder , we register a route and the corresponding middleware and controller to it