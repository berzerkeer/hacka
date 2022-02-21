import create from 'zustand';
import { devtools } from 'zustand/middleware';

const appInitialState = {
  posts: [],
  users: [],
  currentPostId: ''
};

export const useAppstore = create(
  devtools((set, get) => ({
    ...appInitialState,
    getPosts: async function getPosts() {
      try {
        const res = await fetch('http://localhost:8000/post');
        const data = await res.json();
        set(() => ({
          posts: data
        }));
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    },
    getUsers: async function getUsers() {
      try {
        const res = await fetch('http://localhost:8000/user');
        const data = await res.json();
        set(() => ({
          users: data
        }));
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    },
    setPostsbySortOrder: (posts) => {
      set(() => ({
        posts
      }));
    },
    setPosts: (posts) => {
      set((state) => ({
        posts: [...state.posts, posts]
      }));
    },
    updatePosts: (post) => {
      set((state) => ({
        posts:
          state.posts &&
          state.posts.map((obj) => {
            if (obj.id === post.id) {
              return { ...obj, ...post };
            }
            return obj;
          })
      }));
    },
    setCurrentPostId: (postId) => {
      set(() => ({
        currentPostId: postId
      }));
    }
  }))
);
