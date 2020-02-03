## Access-Fronend-Exercise

#### Requirements

- Node.js
- YARN

```javascript

/* First, Install the needed packages */
yarn

/* Then start both Node and React */
yarn dev

```

## Component Design

```javascript

GitHub
  ├── SingleUser.js           # Display a single user
  |                           # receive the singleUser from store and render
  |                             on modal after the click event at UserList component is fired
  |
  ├── UserList.js             # Display mulitple users
  |                           # receive the users from store after the index container is mounted.

Modal
  ├── ModalComponents.js      # component created by styled component lib
  ├── index.js                # display a modal component

Table
  ├── TableComponents.js      # component created by styled component lib
  ├── index.js                # display a table component

```

## Data Flow Services (Global State Management)

```javascript

Global State

user
  ├── userList
  ├── singleUser

user
  ├── actions.js              # action creators which includes
  |                           # fetchUser, the synchronous action to drive the asynchronous one
  |                           # fetchUserFulfilled, the asynchronous action to obtain the single user info by calling api
  |                           # fetchUserList, the synchronous action to drive the asynchronous one
  |                           # fetchUserListFulfilled, the asynchronous action to obtain the userList info by calling api
  |
  ├── actionTypes.js          # plan variety of action type
  ├── reducer                 # update global state after obtain the new action payload
  ├── epic                    # return the action after get the response

```
