import React from "react";
import styled from 'styled-components';
import { Arrow90degRight } from "styled-icons/bootstrap";
import BotImage from "../../assets/bot.png"

const Shorter = () => {
    return (
        <PaddingBox>
            <div style={{flex:1}} >
                <h1>URL Shortener</h1>
                <pre>Tek Link. Tek Tık.<Arrow90degRight/> </pre>
                <CustomInput>
                    <input type= "text" placeholder = "URL Giriniz"/>
                </CustomInput>
                <Button>
                    <span>Kısalt</span>
                </Button>
            </div>
            <RightSide>
                <img src={BotImage} alt=""/>
            </RightSide>
        </PaddingBox>
    )
}

const RightSide = styled.div`
     flex:0.5;
     padding-right:60px;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
     img{
        width: 100%;
        height: 100%;
        transform:scale(1.1);
        object-fit:cover;
     }
`


const Button = styled.button`
    border:none;
    outline:none;
    background:var(--primary);
    width:540px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
    border-radius:180px;
    margin-top:40px;
    color:white;
    font-size:25px;
`

const CustomInput = styled.div`
    background:white;
    padding:20px 20px;
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
    padding-left:100px;
    padding-right:100px;
    padding-top:80px;
    display:flex;
    h1{
        color: white;
    }
    pre{
        color:white;
        font-size:20px;
        width:500px;
        height:100px;
        white-space:pre-wrap;
        position:relative;
        svg{
            // position:absolute;
            // bottom:0;
            // left:0;
            margin-top:20px;
            width:60px;
            margin-left:10px;
            transform:rotate(90deg);
        }
    }
`

export default Shorter;