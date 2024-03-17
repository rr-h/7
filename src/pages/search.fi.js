import React from 'react';
import { graphql } from 'gatsby';

import SearchPage from '../components/SearchPage';

const Search = ({ data }) => (
  <SearchPage localSearch={data.localSearchFinnish} />
);

export default Search;

export const pageQuery = graphql`
  query {
    localSearchFinnish {
      store
      index
    }
  }
`;
