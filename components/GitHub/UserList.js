import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserList } from '../../services/user/actions';
import { Table } from '../Table';

const UserList = props => {
  const users = useSelector(state => state.user.users);

  const { openDetailUser } = props;

  const columns = [
    {
      name: 'id',
      label: 'No.',
    },
    {
      name: 'login',
      label: 'Account',
      options: {
        isLink: true,
        onClick: openDetailUser,
      },
    },
    {
      name: 'avatar_url',
      label: 'Avatar',
      options: {
        isImg: true,
      },
    },
    {
      name: 'site_admin',
      label: 'IsAdmin',
      options: {
        isBoolean: true,
      },
    },
  ];

  return <Table columns={columns} datas={users} pagination={fetchUserList} />;
};

export { UserList };
