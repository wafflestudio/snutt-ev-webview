import React from 'react';

import { withGetServerSideProps } from '@/lib/util/withGetServersideProps';
import { SearchImpl } from '@/pageImpl/searchImpl';

export default function SearchView() {
  return <SearchImpl />;
}

export const getServerSideProps = withGetServerSideProps(
  async () => {
    return { props: {} };
  },
  { emailVerification: 'verified' },
);
