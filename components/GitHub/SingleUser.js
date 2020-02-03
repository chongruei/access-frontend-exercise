import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CustModal } from '../Modal';
import { Container, Row } from '../Modal/ModalComponents';

const SingleUser = props => {
  const { modalIsOpen, closeDetailUser } = props;
  const singleUser = useSelector(state => state.user.singleUser);
  const { avatar_url, name, company, blog, location, email, bio, followers, following } = singleUser;

  return (
    <CustModal modalIsOpen={modalIsOpen} closeModal={closeDetailUser}>
      <Container>
        <Row>
          <img src={avatar_url}></img>
        </Row>
        {name && (
          <React.Fragment>
            <Row isTitle>Name</Row>
            <Row>{name}</Row>
          </React.Fragment>
        )}

        {company && (
          <React.Fragment>
            <Row isTitle>Company</Row>
            <Row>{company}</Row>
          </React.Fragment>
        )}

        {blog && (
          <React.Fragment>
            <Row isTitle>Blog</Row>
            <Row>{blog}</Row>
          </React.Fragment>
        )}

        {location && (
          <React.Fragment>
            <Row isTitle>Location</Row>
            <Row>{location}</Row>
          </React.Fragment>
        )}

        {email && (
          <React.Fragment>
            <Row isTitle>Email</Row>
            <Row>{email}</Row>
          </React.Fragment>
        )}

        {bio && (
          <React.Fragment>
            <Row isTitle>Bio</Row>
            <Row>{bio}</Row>
          </React.Fragment>
        )}

        <Row isTitle>Followers</Row>
        <Row>{followers}</Row>
        <Row isTitle>Following</Row>
        <Row>{following}</Row>
      </Container>
    </CustModal>
  );
};

export { SingleUser };
