import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../card/card";
import "./home.css"

const Home = () => {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [isInput, isSetInput] = useState(false)
    //const [error, setError] = useState({ search: { validation: true, message: "" } })

    const handleSearch = () => {
        if(input===""){
            alert("Please Enter an Input")
            //setError({ search: { validation: false, message: "Please Enter an Input" } })
        }

        else{
            //alert("Please Enter an Input")
            isSetInput(true)
            setSearch(input)
            setInput("")
        }
        
    }
    return (
        <>
            <section className="home-container">
                <Link className="home-heading-link" to="/"><h2 className="home-heading">Snap Shot</h2></Link>

                <section className="home-search-section">
                    <input type="text" onChange={(e) => { setInput(e.target.value) }} placeholder="Search...." value={input} />
                    <button onClick={handleSearch}><i className="fa fa-search-plus"></i></button>
                    {/* {<div style={{color:"red"}}>{error.search.message}</div>} */}
                </section>

                <section className="home-btn-section">
                    <Link to="/"><button>Mountain</button></Link>
                    <Link to="/beaches"><button>Beaches</button></Link>
                    <Link to="/birds"><button>Birds</button></Link>
                    <Link to="/foods"><button>Food</button></Link>
                </section>


                {
                    isInput && 

                    <section className="search-container">
                        <h3>{search} Pictures</h3>

                        <section className="search-images">
                            <Card value={search}/>
                        </section>
                    </section>
                }

            </section>
        </>
    )
}

export default Home;