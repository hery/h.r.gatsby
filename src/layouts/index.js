
import React from 'react'
import Link from "gatsby-link";


const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({ children }) => (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link style={{ textShadow: `none`, backgroundImage: `none`}}>
                <h3 style={{ display: `inline` }}to='/'>/</h3>
            </Link>
            <ul style={{ listStyle:`none`, float: `right` }}>
                <ListLink to='about'>About</ListLink>
                <ListLink to='about'>About</ListLink>
                <ListLink to='about'>About</ListLink>
            </ul>
        </header>
        { children() }
    </div>
)