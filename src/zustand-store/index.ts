import { getUser } from '@/services/User';
import { create } from 'zustand';

interface User {
  avatarUrl: string;
  githubUrl: string;
  name: string;
  company: string;
  location: string;
}

export interface UserState {
  user: User | null;
  isLoading: boolean;
  load: (username: string) => Promise<void>;
}

export const useStore = create<UserState>((set) => {
  return {
    user: null,
    isLoading: true,

    load: async (username: string) => {
      const data = await getUser(username);

      if (data) {
        const user: User = {
          avatarUrl: data.avatar_url,
          company: data.company,
          githubUrl: data.url,
          location: data.location,
          name: data.name
        };

        set({ isLoading: false, user });
      }
    }
  };
});
