import React from 'react'
import { Router, Route, Redirect, IndexRedirect } from 'react-router'
import Container from './components/Container'
import Filters from './components/Filters'

import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'
import ErrorPage from './routeHandlers/ErrorPage'
import history from './history'
import MainArticlesPage from './components/Articles/MainArticlesPage'


export default <Router history={history}>
    <Route path="/" component={Container}>
        <IndexRedirect to="/articles" />
        <Redirect from="article" to="/articles" />
        <Route path="articles/:id" component={ArticlePage} />
        <Route path="articles" component={MainArticlesPage} />
        <Route path="filters" component={Filters} />
        <Route path="error" component={ErrorPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
</Router>
