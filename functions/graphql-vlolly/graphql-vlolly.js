const { ApolloServer, gql } = require("apollo-server-lambda");
const faundadb = require("faunadb");
const q = faundadb.query;
const dotenv = require("dotenv");
dotenv.config();

const typeDefs = gql`
  type Query {
    queryVlolly: [Vlolly]!
    queryLollyByLink(linkID: String!): Lolly 
  }
  type Mutation {
    addVlolly(
      topColor: String!
      middleColor: String!
      bottomColor: String!
      senderName: String!
      message: String!
      recieverName: String!
      linkID: String!
    ): Vlolly
  }
  type Vlolly {
    id: ID!
    topColor: String!
    middleColor: String!
    bottomColor: String!
    senderName: String!
    message: String!
    recieverName: String!
    linkID: String!
  }
`;

const resolvers = {
  Query: {
    queryVlolly: async (roots, args, context) => {
      try {
        const adminClient = new faundadb.Client({
          secret: process.env.FAUNA_DB_SECRET_KEY,
        });

        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index("vlolly_index"))),
            q.Lambda("X", q.Get(q.Var("X")))
          )
        );

        console.log(result.data);

        return result.data.map((value) => {
          return {
            id: value.ref.id,
            topColor: value.data.topColor,
            middleColor: value.data.middleColor,
            bottomColor: value.data.bottomColor,
            senderName: value.data.senderName,
            message: value.data.message,
            recieverName: value.data.recieverName,
            linkID: value.data.linkID,
          };
        });
      } catch (error) {
        console.log(error.message);
      } 
    },
    queryLollyByLink: async (_,{linkID})=>{
      try {
        const adminClient = new faundadb.Client({
          secret: process.env.FAUNA_DB_SECRET_KEY,
        });

        const result = await adminClient.query(
          q.Get(q.Match(q.Index("Lolly_by_link"), linkID))
        );
        
        return {
          id: result.ref.id,
          topColor: result.ref.data.topColor,
          middleColor: result.ref.data.middleColor,
          bottomColor: result.ref.data.bottomColor,
          senderName: result.ref.data.senderName,
          message: result.ref.data.message,
          recieverName: result.ref.data.recieverName,
          linkID: result.ref.data.linkID,
        };
      } catch (error) {
        console.log(error.message)
      }
    },
  },

  Mutation: {
    addVlolly: async (
      _,
      {
        topColor,
        middleColor,
        bottomColor,
        senderName,
        message,
        recieverName,
        linkID,
      }
    ) => {
      try {
        const adminClient = new faundadb.Client({
          secret: process.env.FAUNA_DB_SECRET_KEY,
        });

        const result = await adminClient.query(
          q.Create(q.Collection("vlolly_app"), {
            data: {
              topColor,
              middleColor,
              bottomColor,
              senderName,
              message,
              recieverName,
              linkID,
            },
          })
        );

        axios
        .post("https://api.netlify.com/build_hooks/5feb08289463200fbd72883c")
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.error(error)
        })

        console.log(result);
        return {
          id: result.ref.id,
          topColor: result.ref.data.topColor,
          middleColor: result.ref.data.middleColor,
          bottomColor: result.ref.data.bottomColor,
          senderName: result.ref.data.senderName,
          message: result.ref.data.message,
          recieverName: result.ref.data.recieverName,
          linkID: result.ref.data.linkID,
        };
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler();
