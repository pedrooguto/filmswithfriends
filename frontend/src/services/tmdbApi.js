import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGU5ZDE1MDA3ODA4YWY5MWU1ZGY2YjFjYTg1NjQ1MyIsIm5iZiI6MTc4MTA5NDMzNC4xOSwic3ViIjoiNmEyOTU3YmVmNWMwNzRhNmQyMjI3NzNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-hcyL4DK0Se49IvFuDdjulPjxCXvIkGQelnfEilsmjw";

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export async function pesquisarFilme(titulo) {
    const response = await tmdbApi.get("/search/movie", {
        params: {
            query: titulo,
            language: "pt-BR"
        }
    });

    return response.data;
}