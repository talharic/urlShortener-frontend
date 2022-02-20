import React from "react";
import Navbar from "./NavigationBar/Navbar";
import Shorter from "./Shorter/Shorter"
import styled from 'styled-components';


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
                },
                {
                    id:1,
                    name:"Shorter",
                    component:<Shorter/>
                }
            ]
        }
    ]

    return(
        <PageRenderer>
            {Pages[0].components.map((component_) => {
                return component_.component
            })}
        </PageRenderer>
    )
}

const PageRenderer = styled.div`
    background:linear-gradient(to bottom, #9086F4, #E185F5);
    max-height:100vh;
    width:100vw;
    height:100vh;
`

export default urlShortener;