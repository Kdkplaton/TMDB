window.onload = function () {
    console.log("첫 로드작업")

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM1OGMyZTFkNDExZjhlYTdiYzNlODNiMTU1MmNjZiIsInN1YiI6IjY2MjlmZTMxZjcwNmRlMDExZjRmZGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CuaQoR0S4oo5lny0tSRCC7p-siuCDsw9zZjwkKA1yiM'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const parentElement = document.getElementById("movie_list");
            parentElement.innerHTML = '';
            let movie_list = data.results;
            console.log(movie_list);

            movie_list.forEach((list_member) => {
                let card_html = `<div class="col mb-4" onclick="alert('영화 ID : ${list_member.id}')">
                    <div class="card h-100" >
                        <img src="${"https://image.tmdb.org/t/p/w500" + list_member.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${list_member.original_title}</h5>
                            <p class="card-text">${list_member.overview}</p>
                            <p class="card-path">Poster-Path : ${list_member.poster_path}</p>
                            <p class="card-vote">Rating : ${list_member.vote_average}</p>
                        </div>
                    </div>
                </div>
                `;

                parentElement.innerHTML += card_html;
            });
        })
        .catch(err => console.error(err));


}

function searchMovie() {
    let target = document.getElementById("input_search").value;
    console.log(target);
    target = target.toString();
    console.log(target);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM1OGMyZTFkNDExZjhlYTdiYzNlODNiMTU1MmNjZiIsInN1YiI6IjY2MjlmZTMxZjcwNmRlMDExZjRmZGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CuaQoR0S4oo5lny0tSRCC7p-siuCDsw9zZjwkKA1yiM'
        }
    };
    
    fetch(`'https://api.themoviedb.org/3/search/movie?query=${target}&api_key=fa358c2e1d411f8ea7bc3e83b1552ccf'`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const parentElement = document.getElementById("movie_list");
            parentElement.innerHTML = '';
            let movie_list = data.results;
            console.log(movie_list);

            movie_list.forEach((list_member) => {
                let card_html = `<div class="col mb-4" onclick="alert('영화 ID : ${list_member.id}')">
                    <div class="card h-100" >
                        <img src="${"https://image.tmdb.org/t/p/w500" + list_member.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${list_member.original_title}</h5>
                            <p class="card-text">${list_member.overview}</p>
                            <p class="card-path">Poster-Path : ${list_member.poster_path}</p>
                            <p class="card-vote">Rating : ${list_member.vote_average}</p>
                        </div>
                    </div>
                </div>
                `;

                parentElement.innerHTML += card_html;
            });
        })
        .catch(err => console.error(err));
}

let serachBtn = document.getElementById("btn-search");
serachBtn.onclick = searchMovie;
