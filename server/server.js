const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddelware } = require('@apollo/server/express4');
// const path = require('path');
// const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });


// const startApolloServer = async () => {
//     await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // app.use('/graphql', expressMiddelware(server, {
    //     context: authMiddleware
    // }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            app.use(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    app.listen(PORT, () =>
        console.log(`Example app listening at http://localhost:${PORT}`)
      );
      
    // db.once('open', () => {
    //     app.listen(PORT, () => {
    //         console.log(`API Server running on ${PORT}`);
    //         console.log(`Use graphql at http://localhost:${PORT}/graphql`);
    //     });
    // });
// };

// startApolloServer();