const axios = require('axios');
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGU5ZDE1MDA3ODA4YWY5MWU1ZGY2YjFjYTg1NjQ1MyIsIm5iZiI6MTc4MTA5NDMzNC4xOSwic3ViIjoiNmEyOTU3YmVmNWMwNzRhNmQyMjI3NzNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-hcyL4DK0Se49IvFuDdjulPjxCXvIkGQelnfEilsmjw";

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const buscarFilmes = async ({
    query,
    include_adult = 'false',
    language = 'en-US',
    primary_release_year,
    page = '1',
    region,
    year
}) => {

    console.log(
        "Parâmetros:",
        query,
        include_adult,
        language,
        primary_release_year,
        page,
        region,
        year
    );

    const response = await tmdbApi.get("/search/movie", {
        params: {
            query,
            include_adult: include_adult === 'true',
            language,
            primary_release_year,
            page: Number(page),
            region,
            year
        }
    });

    return response.data;
};

const buscarPosters = async (req) => {};

module.exports = {
  buscarFilmes,
  buscarPosters
};

