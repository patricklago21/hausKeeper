# hausKeepr version 1.06212021

# TheKeeprs Mission and Objectives

Our mission is to provide economic empowerment in this changing world. TheKeeprs are here to create an application that helps the working class find more opportunities for earning money and at the same time, valuable time for themselves and their families and friends. 

- Create an interface that would connect modern day busy professionals to the best housekeepers near them so that they can obtain house work services through clicks of a button. 
- Create a community of individuals including cleaners, gardeners, window cleaners, and other skilled housekeepers.
- Make use of technology in a way that is helpful for individuals with economic needs and develop trust among communities. 

# Description

The hausKeepr app is designed to connect housekeepers to client or working professionals, allowing for an easy and convenient way of getting assistance on house work. 

1. [ hausKeepr Demo. ](#demo)
2. [ User Story. ](#story)
3. [ User Acceptance Criteria. ](#uac)
4. [ Database Model. ](#mod)
5. [ Association. ](#ass)
6. [ Special Instructions. ](#how)

<a name="demo"></a>

# *hausKeepr* Demo

Walkthrough Videos:

1. Create the schema.

2. Seed the database.

3. Start the Application server.

4. GET routes.

5. GET routes for a single record.

6. POST, PUT, and DELETE routes.

<a name="story"></a>
## User Story

AS A 
I WANT 
SO THAT 

<a name="uac"></a>
## Acceptance Criteria

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

<a name="mod"></a>
## Database Models

- `Category`

    - `id`
        - Integer
        - Doesn't allow null values
        - Set as primary key
        - Uses auto increment

    - `category_name`
        - String
        - Doesn't allow null values

- `Product`

    - `id`
        - Integer
        - Doesn't allow null values
        - Set as primary key
        - Uses auto increment

    - `product_name`
        - String
        - Doesn't allow null values

    - `price`
        - Decimal
        - Doesn't allow null values
        - Validates that the value is a decimal

    - `stock`
        - Integer
        - Doesn't allow null values
        - Set a default value of 10
        - Validates that the value is numeric

    - `category_id`
        - Integer
        - References the category model's id

- `Tag`

    - `id`
        - Integer
        - Doesn't allow null values
        - Set as primary key
        - Uses auto increment

    - `tag_name`
        - String

- `ProductTag`

    - `id`
        - Integer
        - Doesn't allow null values
        - Set as primary key
        - Uses auto increment

    - `product_id`
        - Integer
        - References the product model's id

    - `tag_id`
        - Integer
        - References the tag model's id

<a name="ass"></a>
## Associations

*Execute association methods on your Sequelize models to create the following relationships between them:*

- Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

- Category has many Product models.

- Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

- Tag belongs to many Product models.

<a name="how"></a>
## Special Instructions

- Add a .env file to the root of the app with the following details

```text
DB_NAME='****_db'
DB_USER='xxx'
DB_PW='xxx'
```


******************************************************************
# PROJECT REQUIREMENTS

Your project should fulfill the following requirements:

Use Node.js and Express.js to create a RESTful API.

Use Handlebars.js as the templating engine.

Use MySQL and the Sequelize ORM for the database.

Have both GET and POST routes for retrieving and adding new data.

Be deployed using Heroku (with data).

Use at least one new library, package, or technology that we haven’t discussed.

Have a polished UI.

Be responsive.

Be interactive (i.e., accept and respond to user input).

Have a folder structure that meets the MVC paradigm.

Include authentication (express-session and cookies).

Protect API keys and sensitive information with environment variables.

Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).

Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

You and your group will use everything you’ve learned over the past six weeks to create a full-stack application that works with real-world data to solve a real-world challenge. Even more than your first group project, this project will provide you with an opportunity to demonstrate your problem-solving skills, which employers will want to see when you begin to interview for development roles. Once again, the user story and acceptance criteria will depend on the project that you create, but your project must fulfill some specific requirements.

The requirements for this project ask you to use the skills and technologies you’ve learned over the past six weeks (server-side JavaScript, RESTful APIs, databases, object-relational mapping, environment variables, templating, and authentication).

You’ll also have to use some of the more conceptual skills you’ve picked up and think like a developer. MySQL isn’t the only relational database management system. Sequelize isn’t the only ORM. And Handlebars.js isn’t the only templating engine. As a developer, you’ll have to jump in and learn new technologies at a moment’s notice, digging into the documentation and learning to make new things work with your code. That’s why you should integrate at least one new library, package, or technology that we haven’t discussed in this course into your application.

Your codebase for this project will be larger and more complicated than the codebase for your first group project. You’ll also have different developers working in different areas at the same time. Structuring your application to follow the MVC paradigm will allow you to enforce this separation of concerns, dividing the data models, the views and design, and the API route controller into their own distinct areas. This will also prepare you for more performant technologies that you’ll learn in the last part of this course, which use similar architecture.

Data is the foundation of full-stack web development. Creating a real-world application means that you can use what you learned about object-oriented programming and object-relational mapping to model real-world objects and processes, using MySQL and Sequelize to connect your application to real data and deploying your application to a service like Heroku that can handle server-side code and data.

Almost every major programming language uses or has its own templating engine. Even applications that don’t use a templating engine use the concepts involved in templating. You’re likely to encounter templating in any job you find. Using Handlebars.js as the templating engine for your view layer will prepare you for this scenario.

RESTful APIs follow REST, one of the most ubiquitous API architectural patterns. They allow developers to perform CRUD operations on the data stored within the database, following some important principles: naming API endpoints in a way that describes the data being interfaced with, using HTTP methods like GET, POST, PUT, and DELETE to accurately describe the actions performed on those endpoints, and using HTTP status codes after performing a request. Many web development roles require knowledge of RESTful APIs, so your applications must follow this pattern.

Finally, you’ll have to place your work in the context of your future career by adding the project to your portfolio. Each module’s Career Connection has prepared you for life after this boot camp; you should know by now that you need finished applications in your portfolio so that employers can see your work.