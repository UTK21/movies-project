const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const main =document.querySelector('main')
    async function getMovies()
    {
        const data = await fetch(APIURL);
        const data_raw =await data.json();
         console.log(data_raw);


        data_raw.results.forEach((movie)=>{
        const MOVIE1=document.createElement("div");
        const { poster_path, title, vote_average, overview } = movie;
          MOVIE1.innerHTML = `
          <img src="${IMGPATH + poster_path}" 
          alt="${title}"/>
          <div class="movie-info">
              <h3>${title}</h3>
              <span>${vote_average}</span>
              </div>
            
          `;
          
          main.appendChild(MOVIE1)

        })
        
    }
    getMovies();