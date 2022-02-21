import React from 'react';
import NavMenuItem from 'components/NavMenuItem';
import { useAppstore } from 'store/globalStore';

function Tags() {
  const { tags } = useAppstore((state) => state);

  return (
    <>
      {Object.keys(tags).map((tag) => (
        <li key={tag}>
          <NavMenuItem route={tag} name={tag} />
        </li>
      ))}
    </>
  );
}

export const TagsList = React.memo(Tags);

export default TagsList;
