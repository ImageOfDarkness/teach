import React from 'react'
import Post from './Post.js'
import json from './assets/json.json'
import logo from './assets/logo-social.png'
import './styles/styles.css'
import './styles/scss.scss'
import {render} from "react-dom";

const post = new Post('post title', logo)
const unUsed = 'unUsed'

const App = () => (
    <div className="container">
        <h1>helloy</h1>
        <div className="card">
            <h2>test</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))

// const appBody = document.getElementById('app')
// appBody.innerHTML = "sadasd"
// console.log('Post to string:', post.toString())
// console.log('json:', json)