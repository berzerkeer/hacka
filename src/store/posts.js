import create from 'zustand';
import { devtools } from 'zustand/middleware';

const postInitialState = {
  id: '',
  title: '',
  description: '',
  slug: '',
  upvoteCount: 0,
  createdBy: null,
  createdAt: Date.now(),
  tags: []
};

export const usePoststore = create(
  devtools((set, get) => ({
    ...postInitialState,
    setPost: (post) => {
      set((state) => ({
        title: post.title,
        description: post.description,
        slug: post.slug,
        upvoteCount: post.upvoteCount,
        createdBy: post.createdBy,
        createdAt: post.createdAt,
        tags: [...state.tags, post.tags]
      }));
    }
  }))
);
