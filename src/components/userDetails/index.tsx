import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { Star } from '@mui/icons-material';
import { Repo } from '../../types';
import './index.scss';

const UserDetails = ({ user: { id, repos_url} }: any) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
    useEffect(() => {
      if(id){
        setLoading(true);
        axios.get(`${repos_url}`, {
          headers: {
            "Accept": "application/vnd.github+json"
          }
        })
        .then((res) => { setRepos(res?.data)})
        .catch((e) => { console.log(e) })
        .finally(() => { setLoading(false) });
      }
    }, [id]);

    return (
      <>
        {loading 
        ? <CircularProgress />
        : repos.map((repo: Repo) => (
          <div className='user-details_card' key={repo.id}>
            <div className='user-details_content'>
              <div className='user-details_text'>                
                <span className='user-details_text-title'>
                  {repo.name}
                </span>
                <span className='user-details_text-description'>
                  {repo.description}
                </span>
              </div>
              <div className='start_count'>
                {repo.stargazers_count} <Star />
              </div>
            </div>
          </div>
        ))
        }
      </>
    )
  }
  
  export default UserDetails
