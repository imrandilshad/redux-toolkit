import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from '../features/user/userSlice';

const UserList = () => {
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div className='flex'>
      {users?.userList.length
        ? users?.userList.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })
        : users?.isLoading && <h1>Loading...</h1>}
    </div>
  );
};

export default UserList;
