import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";


export default function User({match}) {

    const [user,setUser] = useState([]);

    useEffect(() => {
            axios
            .get(`https://reqres.in/api/users/${match.params.id}`)
            .then(function (response) {
                setUser(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{user.first_name}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <img src={user.avatar} alt={user.first_name}/>
                <h2>Name: {user.first_name} {user.last_name}</h2>
                <p>Email: {user.email}</p>
            </div>
        </>
    );
}
