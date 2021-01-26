import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Users() {

    const [users,setUsers] = useState([]);

    useEffect(() => {
            axios
            .get('https://reqres.in/api/users')
            .then(function (response) {
                setUsers(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    let renderItems = () => {
        return users.map((user) => (
            <Div key={user.id}>
                <Link to={`/user/${user.id}`} style={{textDecoration: 'none'}}>
                    <ProfileImg src={user.avatar} alt={user.first_name} />
                    <Name>{user.first_name} {user.last_name}</Name>
                    <EmailLink>Email: {user.email}</EmailLink>
                </Link>
            </Div>
        ));
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Users</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Heading>Users</Heading>
            <MainSection>
                {renderItems()}
            </MainSection>
        </>
    )
}

const Heading = styled.h1`
    text-align: center;
    font-size: 50px;

`;

const MainSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 50px 100px 100px;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const Div = styled.div`
    width: 28%;
    background: #EBEBEB;
    margin: 20px;
    padding: 20px;
    &:nth-child(3n) {
        margin-right: 0;
    }
    &:hover {
        cursor: pointer;
    }
    &:hover a,&:focus a{
        text-decoration: underline;
    }
`;

const Name = styled.h2`
    text-align: center;
    color: #FF4343;
`;

const EmailLink = styled.p`
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    margin-bottom: 20px;
    text-align: center;

`;

const ProfileImg = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 50%;
`;