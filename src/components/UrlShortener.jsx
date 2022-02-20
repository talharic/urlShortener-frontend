import React from "react";
import Navbar from "./NavigationBar/Navbar";
const urlShortener = () =>{

    const Pages = [
        {
            id:0,
            path:"/",
            components: [
                {
                    id:0,
                    name:"Navigation Bar",
                    component:<Navbar/>
                }
            ]
        }
    ]

    return(
        <div>
            {Pages[0].components[0].component}
        </div>
    )
}

export default urlShortener;