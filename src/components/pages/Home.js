import React, { useState, useEffect } from 'react';
import Loading from '../atoms/loader';
import Card from '../molecules/Card';
import SimpleList from '../molecules/SimpleList';
import Search from '../molecules/Search';
import { api } from '../../services/githubAPI';

export default function Home() {

  const [usersList, setUsersList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("users")
      .then(res => {
        // this.setState({ usersList: res.data, loading: false });
        setUsersList(res.data);
        setLoading(false);
      })
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


