import React from "react";

interface IUserListProos {
  id: string;
  firstName: string;
  lastName: string;
}
export const TypeIF = ({ list }: { list?: IUserListProos[] }) => {
  if (!list) {
    return null;
  }

  return (
    <React.Fragment>
      <ul>
        {list.map((user) => {
          return (
            <li>
              {user.firstName} - {user.lastName}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};
