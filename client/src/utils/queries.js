import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query {
    me {
      _id
      username
      email
			savedBooks {
				authors
				description
				title
				bookId
				image
				link
			}
    }
  }
`;
