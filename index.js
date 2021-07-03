/*

Schema? 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명.
1. Database로 부터 정보를 요청해서 받을 데이터. => query // Read
2. 데이터베이스, 서버, 메모리에서 정보를 바꾸는 작업 => Mutation // Create, Delete, Update

Resolver ? 

*/
import { GraphQLServer} from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

server.start(() => console.log('graphQL Server Running'));