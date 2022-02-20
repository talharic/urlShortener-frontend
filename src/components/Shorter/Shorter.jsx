import React from "react";
import styled from 'styled-components';
import { Arrow90degRight } from "styled-icons/bootstrap";

const Shorter = () => {
    return (
        <PaddingBox>
            <div>
                <h1>urlShortener</h1>
                <pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit.. <Arrow90degRight/> </pre>
                <CustomInput>
                    <input type= "text" placeholder = "URL Giriniz"/>
                </CustomInput>
            </div>
        </PaddingBox>
    )
}


const CustomInput = styled.div`
    background:white;
    padding:10px;
    width:500px;
    border-radius: 180px;
    Input{
        font-size:20px;
        width:100%;
        border:none;
        outline:none;
        background:transparent;
    }
`

const PaddingBox = styled.div`
    padding:30px;
    h1{
        font-family: 'Anton', sans-serif;
        color: white;
    }
    pre{
        color:white;
        font-size:20px;
        width:500px;
        white-space:pre-wrap;
        position:relative;
        svg{
            position:absolute;
            bottom:0;
            right:0;
            width:60px;
            margin-left:10px;
            transform:rotate(90deg);
        }
    }
`

export default Shorter;