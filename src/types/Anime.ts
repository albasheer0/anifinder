export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  type: string;
  format: string;
  status: string;
  description: string;
  episodes: number;
  duration: number;
  seasonYear: number;
  season: string;
  genres: string[];
  averageScore: number;
  popularity: number;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
  };
  bannerImage: string;
  trailer: {
    id: number;
    site: string;
    thumbnail: string;
  };
  staff: {
    edges: {
      node: {
        id: number;
        name: {
          full: string;
          native: string;
          alternative: string[];
        };
        image: {
          medium: string;
        };
      };
      role: string;
    }[];
  };
  characters: {
    edges: {
      id: number;
      role: string;
      node: {
        id: number;
        name: {
          full: string;
          native: string;
          alternative: string[];
        };
        image: {
          medium: string;
        };
      };
    }[];
  };
};
