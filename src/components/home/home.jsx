import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return (
        <>
            <section className="home-container">
                <Link className="home-heading-link" to="/"><h2 className="home-heading">Snap Shot</h2></Link>

                <section className="home-search-section">
                    <input type="text" placeholder="Search...." />
                    <button><i className="fa fa-search-plus"></i></button>
                </section>

                <section className="home-btn-section">
                    <Link to="/"><button>Mountain</button></Link>
                    <Link to="/beaches"><button>Beaches</button></Link>
                    <Link to="/birds"><button>Birds</button></Link>
                    <Link to="/foods"><button>Food</button></Link>
                </section>
            </section>
        </>
    )
}

export default Home;