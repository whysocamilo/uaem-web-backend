import 'graphql-import-node';
import resolvers from './../resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
//Print merged typeDefs
import  { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);


//ejecutable del schema.graphql
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  export default schema;