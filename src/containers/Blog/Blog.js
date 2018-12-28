import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const lazyLoading = asyncComponent(()=> {

    return import('./NewPost/NewPost');
})

class Blog extends Component {

    state ={
        auth: true
    }

    render () {
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {/* implementing Guard functionality */}
                    {this.state.auth ? <Route path="/new-post" component={lazyLoading} /> : null}
                    <Route path="/posts" component={Posts} />
                </Switch>
                <h1 align="center"> Welcome to Rahul's Blog</h1>
                <p align="center" > Rahul's Blog was developed as a side project while I was learning ReactJS , NodeJS and MongoDB. 
                    <br></br>In this project , I have incorporated various concepts of Full-Stack Development like Routing <br></br>, Server Callbacks , Redux(For state management) and so on.

                </p>
            </div>
        );
    }
}

export default Blog;