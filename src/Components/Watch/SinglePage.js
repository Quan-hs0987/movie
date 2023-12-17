import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummyData";
import { Upcomming } from "../Upcomming/Upcomming";
import "./SinglePage.css";

export const SinglePage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id));
        if (item) {
            setItem(item);
        }
    }, [id]);
    const [rec, setRec] = useState(recommended);
    return (
        <>
            {" "}
            {item ? (
                <>
                    <section className="singlePage">
                        <div className="singleHeading">
                            <h1>{item.name}</h1>
                            <span> | {item.item} | </span>
                            <span>HD</span>
                        </div>
                        <div className="container">
                            <video src={item.video} controls></video>
                            <div className="para">
                                <h3>Date: {item.date}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="social">
                                <h3>Share: </h3>
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" />
                                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
                            </div>
                        </div>
                    </section>
                    <Upcomming items={rec} title="Recommend Movies" />
                </>
            ) : null}{" "}
        </>
    );
};
