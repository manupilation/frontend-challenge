import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from '../infra/Head';
import Header from '../components/Header'
import WinesList from '../components/WinesList';
import SearchForm from '../components/SearchForm';
import GlobalStyle from '../styles/GlobalStyles';


const Home: NextPage = () => {
  const [sortOption, setSortOption] = useState('');

  return (
    <div>
      <GlobalStyle />
      <Head title="Wine" />
  
      <Header />
      <div>
        <SearchForm sortOp={setSortOption}/>
        <WinesList sortSl={sortOption}/>
      </div>
    </div>
  );
} ;

export default Home;
