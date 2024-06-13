import {useEffect} from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import {useAppSelector, useAppDispatch} from '../../app/hooks.ts';

import {fetchUsers} from './userSlice.js'

export const UserView = () => {
const user = useAppSelector(state => state.user);
const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    //eslint-disable-next-line
  },[])
  return(
    <div>
      <h2>List of users - </h2>
      {
      user?.loading && "Loading ..."
      }
      {
      !user?.loading && user.error ? <div>{`Error - ${user.error}`}</div> :
      null
      }
      {
      !user.loading && user.users.length ? (
      <ul>
        {user.users.map(user => (
        <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      ) : null
      }
    </div>
  )
}
