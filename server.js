require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const TMDB_API_KEY =API Read Access Token

eyJhbGci0iJIUzI1NiJ9.eyJhdWQi0iI3ZDhlMTZ1MDgxZGU4MzYxZjcwNGIx0GY xNzNhMWZ1NyIsIm5iZiI6MTc4ODkzMzE0Ni44MDksInN1YiI6IjZhYTBmNDFhY2Q zMjBmNjgyNTVhZDFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjo xfQ.5AKPUqkUL3BHpFf06j280nmMnjWs-Z6F3Gaw0196SR4

API Key

7d8e16e081de8361f704b18f173a1fe7 process.env.TMDB_API_KEY;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Store reviews in memory (for now - can upgrade to database later)
let reviews = {};

// Routes

// Home page - Popular movies
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        page: 1
      }
    });
    
    const movies = response.data.results || [];
    res.render('index', { movies });
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    res.render('index', { movies: [], error: 'Failed to load movies' });
  }
});

// Search movies
app.get('/search', async (req, res) => {
  const query = req.query.q;
  
  if (!query) {
    return res.redirect('/');
  }

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: query,
        page: 1
      }
    });
    
    const movies = response.data.results || [];
    res.render('search-results', { movies, query });
  } catch (error) {
    console.error('Error searching movies:', error.message);
    res.render('search-results', { movies: [], query, error: 'Failed to search movies' });
  }
});

// Movie details page
app.get('/movie/:id', async (req, res) => {
  const movieId = req.params.id;

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });
    
    const movie = response.data;
    const movieReviews = reviews[movieId] || [];
    
    res.render('movie-details', { movie, movieReviews });
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    res.status(404).render('error', { error: 'Movie not found' });
  }
});

// Submit a review
app.post('/movie/:id/review', (req, res) => {
  const movieId = req.params.id;
  const { author, rating, comment } = req.body;

  if (!reviews[movieId]) {
    reviews[movieId] = [];
  }

  reviews[movieId].push({
    author: author || 'Anonymous',
    rating: parseInt(rating) || 0,
    comment: comment || '',
    date: new Date().toLocaleDateString()
  });

  res.redirect(`/movie/${movieId}`);
});

// 404 error handler
app.use((req, res) => {
  res.status(404).render('error', { error: 'Page not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎬 Movie Review App running on http://localhost:${PORT}`);
  console.log(`Make sure to set your TMDB_API_KEY in .env file`);
});
