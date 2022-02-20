import create from 'zustand';
import { devtools } from 'zustand/middleware';

const appInitialState = {
  posts: []
};

export const useAppstore = create(
  devtools((set, get) => ({
    ...appInitialState,
    setPosts: (posts) => {
      set(() => ({
        posts
      }));
    },
    updatePosts: (posts) => {
      set((state) => ({
        posts: [...state.posts, posts]
      }));
    }
  }))
);
