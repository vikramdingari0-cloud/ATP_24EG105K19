// Movie Streaming Platform

import { log } from "console";

// You are working on a movie recommendation system.

// Test data:
 const movies = [
   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
 ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
let scifi = movies.filter(genre => genre.genre == "Sci-Fi")
console.log(scifi);

//     2. map() to return:
//             "Inception (8.8)"
let movie = movies.map(m => `${m.title} (${m.rating})`);
console.log(movie.find(title => title.includes("Inception")));
//     3. reduce() to find average movie rating
let avgrating = movies.reduce((avg,movie) => avg+movie.rating,0) / movies.length
console.log(avgrating);

//     4. find() movie "Joker"
let find = movies.find(movie => movie.title =="Joker")
console.log(find);
//     5. findIndex() of "Avengers"
let findindex = movies.findIndex(movie => movie.title=="Avengers")
console.log(findindex);