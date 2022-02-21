import React, { useRef } from 'react';
import NavMenuItem from 'components/NavMenuItem';

const predefinedTags = [
  {
    id: 1,
    route: 'tech',
    name: 'tech'
  },
  {
    id: 2,
    route: 'feature',
    name: 'feature'
  },
  {
    id: 3,
    route: 'piratenight',
    name: 'piratenight'
  },
  {
    id: 4,
    route: 'chapter',
    name: 'chapter'
  },
  {
    id: 5,
    route: 'tooling',
    name: 'tooling'
  },
  {
    id: 6,
    route: 'devops',
    name: 'devops'
  }
];

function Tags() {
  const tags = useRef(predefinedTags);

  return (
    <>
      {tags.current.map((route) => (
        <li key={route.id}>
          <NavMenuItem route={route.route} name={route.name} />
        </li>
      ))}
    </>
  );
}

export const TagsList = React.memo(Tags);

export default TagsList;
