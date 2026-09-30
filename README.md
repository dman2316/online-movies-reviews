# 🎬 Online Movies Reviews

A web application that retrieves movies from the TMDB API and allows users to browse, search, and write reviews.

## Features

- 🎥 Browse popular movies from TMDB
- 🔍 Search for movies by title
- ⭐ View detailed movie information (genre, runtime, overview, etc.)
- 📝 Write and read reviews
- ⚡ Fast and responsive UI
- 🎨 Modern, clean design

## Tech Stack

- **Backend:** Node.js + Express.js
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Styling:** CSS3
- **API:** TMDB (The Movie Database)
- **HTTP Client:** Axios

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API Key (free from [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api))

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/dman2316/online-movies-reviews.git
cd online-movies-reviews
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your TMDB API key:

```bash
cp .env.example .env
```

Edit `.env` and add your TMDB API key:

```
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
PORT=3000
NODE_ENV=development
```

### 4. Get your TMDB API Key

1. Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Sign up for a free account (if you don't have one)
3. Request an API key
4. Copy the API key and add it to your `.env` file

## Running the Application

### Development mode (with auto-reload)

```bash
npm run dev
```

### Production mode

```bash
npm start
```

The app will be available at `http://localhost:3000`

## Project Structure

```
online-movies-reviews/
├── server.js                 # Main Express server
├── package.json             # Project dependencies
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── README.md                # This file
├── views/
│   ├── index.ejs            # Home page with popular movies
│   ├── search-results.ejs   # Search results page
│   ├── movie-details.ejs    # Movie details and reviews page
│   └── error.ejs            # Error page
└── public/
    └── styles.css           # CSS styling
```

## API Routes

- `GET /` - Home page with popular movies
- `GET /search?q=<query>` - Search for movies
- `GET /movie/:id` - View movie details and reviews
- `POST /movie/:id/review` - Submit a movie review

## Features in Detail

### Popular Movies
Browse the latest and most popular movies from TMDB on the home page.

### Search
Use the search bar to find movies by title. Results display instantly.

### Movie Details
View comprehensive information about each movie:
- Poster image
- Title and release year
- TMDB rating
- Overview/synopsis
- Genre(s)
- Runtime
- Original language
- Vote count

### Reviews
- Write reviews with a name, rating (1-5), and comment
- View all reviews submitted by other users
- All reviews are stored in memory (can be upgraded to a database)

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and profiles
- [ ] Persistent review storage
- [ ] User ratings and favorites
- [ ] Review sorting and filtering
- [ ] Movie recommendations
- [ ] Admin panel
- [ ] Rate limiting and validation
- [ ] Docker support
- [ ] Deployment to cloud platforms

## Troubleshooting

### "Invalid API Key" error
- Make sure your TMDB API key is correct and added to the `.env` file
- Check that `TMDB_API_KEY=` is not empty

### Port already in use
- Change the `PORT` variable in `.env` to an available port
- Or kill the process using port 3000: `lsof -ti:3000 | xargs kill -9`

### Movies not loading
- Check your internet connection
- Verify TMDB API is accessible
- Check browser console for errors

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

- Movie data provided by [TMDB (The Movie Database)](https://www.themoviedb.org/)
- Built with [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/)

## Support

For issues or questions, please create an issue on the GitHub repository.

---. 

Happy reviewing! 🍿🎬
