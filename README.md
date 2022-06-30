#Note to self :

- Virtualize hackathon cards list.
- use local states where possible, pass lists as props.
- check unncessary re renders.
- memoize lists component properly.

- Design & Implementation
  - Three main components => Sidebar, Main layout , Auth.
  - Main layout is further split into Stack Layout for hackathon post feeds and Single page layout (Post) for single post view.
  - Sidebar has main navigation
    - all => all posts
    - popular => sort by upvotes (desc) -- TODO
    - trending => upvotes > some threshold && sort by recently Created -- TODO
