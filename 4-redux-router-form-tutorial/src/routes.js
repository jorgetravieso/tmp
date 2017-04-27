import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from'./components/app';
import PostsList from './components/PostsList';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

export default (
    <Route path="/" component={App} >
        {/*
            IndexRoute helper route, will show up when
            the path matches the parent, but not one of the children
        */}
        <IndexRoute component={PostsList} />
        <Route path="/posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);