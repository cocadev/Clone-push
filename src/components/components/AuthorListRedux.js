import React, { memo } from "react";
import { TOP_SELLORS } from "./constants/topSellers";
import UserTopSeller from './UserTopSeller';

const AuthorList = () => {

  return (
    <div>
      <ol className="author_list">
        {TOP_SELLORS.map((author, index) => (
          <li key={index}>
            <UserTopSeller user={author} />
          </li>
        ))}
      </ol>
    </div>
  );
};
export default memo(AuthorList);