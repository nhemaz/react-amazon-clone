import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/LoadingBox'

export default function UserListScreen() {
    const userList = useSelector(state => state.userList);
    const { loading, error, users } = userList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch]);
  return (
      <div>
          <h1>Users</h1>
          {loading ? (<LoadingBox></LoadingBox>) :
              error ? (<MessageBox variant="danger">{error}</MessageBox>) :
                  (
                      <table className="table">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Is Seller</th>
                              <th>Is Admin</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                                   <tbody>
                                        {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.isSeller ? 'YES' : ' NO'}</td>
                                            <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                            <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>

                      </table>
                  )

          }

    </div>
  );
}
