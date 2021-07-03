// resolver -> query를 solve(해결) 하는 것. 데이터를 가져오는 과정은 얘가 담당한다.
const junpil = {
  name: "Junpil",
  age: 27,
  gender: 'male'
}

const resolvers = {
  Query: {
    person: () => junpil
  }
};

export default resolvers;