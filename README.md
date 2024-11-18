![Muvie App Banner](https://github.com/user-attachments/assets/a2d4022f-8457-4503-9106-9f81817e4670)

# Muvie

Movie list application that allows users to modify their bookmarks or favorite movies on the browser. This project used the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) for the initial data. The data fetched from the API can then be saved into a state array as saved movies. This project used the combination of React client and server components to improve performance while maintaining a good user experience.

Since the API `ACCESS_TOKEN` is only available in the server (it could be dangerous to expose keys to the client), I created an API route proxy in the Next.js server to call the TMDB API from the client component dynamically.

## Tech Stack

- **Programming Language**: TypeScript
- **JS Framework**: Next.js, React.js
- **UI Library**: Material UI
- **Data Fetching**: SWR (Caching), Axios, TMDB API
- **State Management**: Zustand, Zustand Persist Middleware

## Features

### 1. Fetch movie data

Get movie details from TMDB API's `/discover/movie` endpoint as initial data.

### 2. Create saved movies (bookmark)

Add movie from initial data that comes from API to be pushed into state array `savedMovies` in `useUserStore`.

Inserted data:

```ts
export type MovieCard = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
```

### 3. Update profile

Update profile data that consists of name and bio on the profile page. Data is updated and saved in a persisted state `name` and `bio` in `useUserStore`.

```ts
export type UserProfile = {
  name: string;
  bio: string;
};
```

### 4. Delete saved movies (bookmark)

Remove a movie object from the state array `savedMovies` in `useUserStore` by its `id`.

### 5. Sort movies by some available key from the API

Available keys included:

- `original_title.asc`
- `original_title.desc`
- `popularity.asc`
- `popularity.desc`
- `primary_release_date.asc`
- `primary_release_date.desc`
- `vote_average.asc`
- `vote_average.desc`

### 6. Search movies

Search by movie's original, translated, and alternative titles on a dedicated page.

### 7. Filter movies by release year

```ts
const url = `/discover/movie?primary_release_year=${year}`;
```

### 8. Movie pagination

Paginate movies fetched from API using SWR and Axios fetcher for caching and improving performance.

```ts
const { data: movies, error } = useSWR(url, fetcher, {
  keepPreviousData: true, // cache data
});

<Pagination count={10} page={page} onChange={handlePage} shape="rounded" color="primary" />;
```

### 9. Bookmark movies

Add and remove movie from state array `savedMovies` in `useUserStore` persisted state on localStorage using Zustand.
