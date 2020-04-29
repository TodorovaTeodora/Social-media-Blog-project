/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import * as devcamp from 'api/devcamp';
import { withRouter, RouteComponentProps } from 'react-router';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { UserSummaryModel } from 'types';
import UserListItem from './UserListItem';
import styles from './UserSearch.module.css';

type Props = RouteComponentProps<[]>;

function UsersSearch({ history }: Props) {
  const [users, setUsers] = useState<UserSummaryModel[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const users = await devcamp.getUsers(query);
      setUsers(users);
    } catch (error) {
      console.log(devcamp.extractError(error));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = ([user]: UserSummaryModel[]) => {
    if (user) {
      history.push(`/users/${user.username}`);
    }
  };

  return (
    <AsyncTypeahead<UserSummaryModel>
      id="users-search"
      labelKey={(option) => `${option.username}`}
      placeholder="Search for a user..."
      allowNew={false}
      multiple={false}
      isLoading={false}
      options={users}
      onSearch={handleSearch}
      renderMenuItemChildren={(user) => {
        return <UserListItem user={user} />;
      }}
      inputProps={{ className: styles.search }}
      onChange={handleChange}
    />
  );
}
export default withRouter(UsersSearch);
