import gql from "graphql-tag";

import { fragments } from "fragments";

const getPosts = gql`
  query GetPosts {
    posts {
      ...PostOverview
    }
  }
  ${fragments.postOverview}
`;

export { getPosts };
