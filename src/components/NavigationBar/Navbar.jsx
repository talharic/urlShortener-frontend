import React from 'react';
import styled from 'styled-components';
import {Home,InfoCircle} from "styled-icons/fa-solid"


const Navbar = () => {
    return <div>
        <NavbarContent>
            <h1>URL Shortener</h1>
            <ul>
                <li>
                    <Home/>
                    Anasayfa
                </li>
                <li>
                    <InfoCircle/>
                    Hakkımızda
                </li>
            </ul>
        </NavbarContent>
    </div>
}

const NavbarContent = styled.div`
    background: transparent;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
        color: white;
        margin-left:30px
    }
    ul{
        margin-right:30px;
        list-style:none;
        display:flex;
        li{
            padding:10px;
            font-size:20px;
            color:white;
            display:flex;
            align-items:center;
            
            svg{
                margin-right:10px;
                width:20px;
            }
        }
    }
`


export default Navbar;