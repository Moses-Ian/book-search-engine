const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Book {
		authors: [String]
		description: String
		title: String
		bookId: ID
		image: String
		link: String
	}
	
	type User {
		_id: ID
		username: String
		email: String
		bookCount: Int
		savedBooks: [Book]
	}

	type Query {
		me: User
	}
	
	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		saveBook(authors: [String], description: String, title: String, bookId: ID, image: String, link: String): Auth
		removeBook(bookId: ID): User
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;
