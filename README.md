## NodePop

Deploy:

```sh
npm install
```

Load initial data to database:

```
npm run init-db
```

Start the application in production with:

```sh
npm start
```

## API Documentation

Ad list:

GET /ads

Tag list:

GET /tags

Create new ad (explanation):

POST /create

Example with filters:

http://localhost:3000/ads?tag=mobi&sale=false&name=ip&maxPrice=60&start=0&limit=2&sort=name

## Syntax Note

When filtering, the **price** parameter works as equal to amount e.g ?price=50 

Price range filters are set as **minPrice** and **maxPrice** parameters e.g ?minPrice=10&&maxPrice=100