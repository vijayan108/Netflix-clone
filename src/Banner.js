import React, {useEffect,useState} from 'react'
import axios from './axios'
import requests from './Request'
import './Banner.css'

export default function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);
    function truncate(string,n ) {

        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg")`,
        backgroundPosition: "center center",

    }}>
        <div className="banner__contents">
            <h1 className="banner__title">The Witcher</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{truncate(`Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.`,150)}</h1>

        </div>
        <div className="banner--fadeBottom" />

    </header>
    )
}
