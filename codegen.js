require('dotenv').config();
module.exports = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_END_POINT]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
          // Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
  ],
  documents: ['graphql/**/*.graphql', 'graphql/**/*.tsx', 'graphql/**/*.ts'],
  overwrite: true,
  generates: {
    'graphql/types.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
