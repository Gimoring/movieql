// resolver -> query를 solve(해결) 하는 것. 데이터를 가져오는 과정은 얘가 담당한다.
// resolversms graphQL 서버에서 요청을 받는다.
// graphQL 서버가 쿼리나 뮤테이션의 정의를 발견하면 리솔버를 찾고 해당 함수를 실행한다.
// 다른 db갈 수 있고  다른 API 갈 수도있고.
// Mutation은 Database의 상태가 변할 때 사용된다.
import { getMovies} from './db';
const resolvers = {
  Query: {
    movies: (_, {rating, limit}) => getMovies(limit, rating),
  }
};

export default resolvers;