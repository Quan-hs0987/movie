import React, { useState } from "react";
import { Homes } from "../Components/Homes/Homes";
import { Upcomming } from "../Components/Upcomming/Upcomming";
import { upcome, latest, recommended } from "../dummyData";
import { Trending } from "../Components/Trending/Trending";

const HomePage = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
    const [rec, setRec] = useState(recommended);

    return (
        <div>
            <Homes />
            <Upcomming items={items} title="Upcomming Movies" />
            <Upcomming items={item} title="Latest Movies" />
            <Trending />
            <Upcomming items={rec} title="Recommend Movies" />
        </div>
    );
};

export default HomePage;
