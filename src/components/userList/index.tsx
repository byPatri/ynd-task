import { Accordion, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import UserDetails from '../userDetails';
import { User } from '../../types';
import './index.scss';

const UserList = ({ users }: { users: User[]}) => {
    return (
      <>
        {users.map((user: User) => (
          <Accordion key={user.id} className='user-list_accordion'>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel-content-${user.id}`}
              id={`panel-${user.id}`}
            >
              <Typography>{user.login}</Typography>
            </AccordionSummary>
            <UserDetails user={user} />
          </Accordion>
        ))}
      </>
    )
  }
  
  export default UserList;
