import { useEffect, useState } from 'react'
import axios from 'axios';
import Search from './components/search'
import UserList from './components/userList'
import './App.scss'

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  
  useEffect(() => {
    if(text?.length > 0){
      onSearch(text);
    }
  }, [text])

  const onSearch = async (text: string) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}+in:login&per_page=5`, {
      headers: {
        "Accept": "application/vnd.github+json"
      }
    });
    setUsers(res?.data?.items || []);
  };

  return (
    <div className="app">
      <div className='app_panel'>
        <Search onSearch={setText} />
        { text?.length > 0 && <p className='search_hint'>Showing users for {text}</p>}
        <UserList users={users} />
      </div>
    </div>
  )
}

export default App
