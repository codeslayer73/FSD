const express = require('express');
const colors = require('colors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const schema = require('./schema/schema');

const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const app = express();

//Connect Database
connectDB();

app.use('/graphql', 
    graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port, console.log(`Server running on port ${port}`));