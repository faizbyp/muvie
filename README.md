# Muvie

Movie list application that allows users to modify their bookmarks or favorite movies on the browser. This project used the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) for the initial data. The data fetched from the API then be saved into a state array as saved movies. This project used the combination of React client and server component to improve performance while maintaining good user experience.

Since the API `ACCESS_TOKEN` is only available in the server (it could be dangerous to expose keys into client), I created an API route proxy in Next.js server to call the TMDB API from client component dynamically.

## Tech Stack

- **JS Framework**: Next.js, React.js
- **UI Library**: Material UI
- **Data Fetching**: SWR (Caching), Axios, TMDB API
- **State Management**: Zustand, Zustand Persist Middleware

## Features

### Fetch movie data

Get movie details from TMDB API `/discover/movie` endpoint as initial data.

### Create saved movies (bookmark)

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

### Update profile

Update profile data that consist of name and bio in the profile page. Data updated and saved in a persisted state `name` and `bio` in `useUserStore`.

```ts
export type UserProfile = {
  name: string;
  bio: string;
};
```

### Delete saved movies (bookmark)

Remove a movie object from state array `savedMovies` in `useUserStore` by its `id`.

### Sort movies by some available key from the API

Available key included:

- `original_title.asc`
- `original_title.desc`
- `popularity.asc`
- `popularity.desc`
- `primary_release_date.asc`
- `primary_release_date.desc`
- `vote_average.asc`
- `vote_average.desc`

### Search movies

Search by movie's original, translated and alternative titles on a dedicated page.

### Filter movies by release year

```ts
const url = `/discover/movie?primary_release_year=${year}`;
```

### Movie pagination

Paginate movies fetched from API using SWR and Axios fetcher for caching and improve performance.

```ts
const { data: movies, error } = useSWR(url, fetcher, {
  keepPreviousData: true, // cache data
});

<Pagination count={10} page={page} onChange={handlePage} shape="rounded" color="primary" />;
```

### Bookmark movies

Add and remove movie from state array `savedMovies` in `useUserStore` persisted state on localStorage using Zustand.
