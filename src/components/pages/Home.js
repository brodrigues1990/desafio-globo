import React, { useState, useEffect } from 'react';
import { api } from '../../services/githubAPI';
import Loading from '../atoms/loader';
import Card from '../molecules/Card';
import SimpleList from '../molecules/SimpleList';
import Search from '../molecules/Search';

const Home = (props) => {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadPage() {
    await api.get("users")
      .then(res => {
        setUsersList(res.data);
        setLoading(false);
      })
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <>
      <Card title="Usuários">
        <Search />
        {loading ? <Loading /> : <SimpleList users={usersList} />}
      </Card>
    </>
  );
}

export default Home;