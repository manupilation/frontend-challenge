/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from '../infra/Head';
import Header from '../components/Header'
import WinesList from '../components/WinesList';
import SearchForm from '../components/SearchForm';
import GlobalStyle from '../styles/GlobalStyles';


const Home: NextPage = () => (
  <div>
    <GlobalStyle />
    <Head title="Wine" />

    <Header />
    <div>
      <SearchForm />  
      <WinesList />
    </div>

  </div>
);

export default Home;
