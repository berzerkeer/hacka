import create from 'zustand';
import { devtools } from 'zustand/middleware';

const userInitialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn')
    ? JSON.parse(localStorage.getItem('isLoggedIn'))
    : false,
  currentUser: localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : null
  // posts: [],
  // upvotes: []
};

export const useUserStore = create(
  devtools((set, get) => ({
    ...userInitialState,
    setIsLoggedIn: (val) => {
      set(() => ({
        isLoggedIn: val
      }));
      localStorage.setItem('isLoggedIn', JSON.stringify(get().isLoggedIn));
    },
    setCurrentUser: (user) => {
      set(() => ({
        currentUser: {
          id: user.id,
          name: user.name,
          avatar: user.avatar ? user.avatar : 'assets/images/dp.png',
          posts: user.posts,
          upvotes: user.upvotes
        }
      }));
      localStorage.setItem('currentUser', JSON.stringify(get().currentUser));
    },
    logOut: () => {
      set(() => ({
        isLoggedIn: false,
        currentUser: null
      }));
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('currentUser');
    }
    // setPosts: (posts) => {
    //   set(() => ({
    //     posts
    //   }));
    // },
    // setUpvotes: (upvotes) => {
    //   set(() => ({
    //     upvotes
    //   }));
    // }
  }))
);
