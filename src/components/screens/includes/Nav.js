import React from 'react'
import { Link } from "react-router-dom";
import Styled from 'styled-components';

export default function Home() {
    return (
        <Div>
            <Logo>LOGO</Logo>
            <Nav>
                <Items>
                    <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
                </Items>
                <Items>
                    <Link to='/about' style={{textDecoration: 'none'}}>About</Link>
                </Items>
                <Items>
                    <Link to='/contact' style={{textDecoration: 'none'}}>Contact</Link>
                </Items>
                <Items>
                    <Link to='/users'  style={{textDecoration: 'none'}}>Users</Link>
                </Items>
            </Nav>
        </Div>
    )
}

const Div = Styled.div`
    height: 100px;
    background: #649922;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: space-between;
    padding: 30px 100px;
`;

const Logo = Styled.h1`
    cursor: pointer;
`;

const Nav = Styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`;

const Items = Styled.li`
    margin-right:30px;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
`;


