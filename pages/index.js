import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchUser, fetchUserList } from '../services/user/actions';
import { SingleUser, UserList } from '../components';

const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    dispatch(fetchUserList(0));
  }, []);

  const openDetailUser = name => event => {
    event.preventDefault();
    dispatch(fetchUser(name));
    setIsOpen(true);
  };

  const closeDetailUser = () => {
    setIsOpen(false);
  };

  return (
    <IndexContainer>
      <UserList openDetailUser={openDetailUser} />
      <SingleUser modalIsOpen={modalIsOpen} closeDetailUser={closeDetailUser} />
    </IndexContainer>
  );
};

export default Index;
