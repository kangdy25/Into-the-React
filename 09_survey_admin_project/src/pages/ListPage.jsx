import React from 'react';
import useSWR from 'swr';
import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';

const ListPage = () => {
  const { data, error } = useSWR('/surveys', fetcher);

  console.log('data: ', data);

  if (error) {
    return 'error';
  }
  return <MainLayout>ListPage</MainLayout>;
};

export default ListPage;
