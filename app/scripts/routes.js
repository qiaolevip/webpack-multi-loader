import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import NotFound from './pages/notFound.jsx';

const routes = (
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="home" component={ Home } />
			<Route path="about" component={ About } />
			<Route path="about/:what" component={ About } />
			<Redirect from="profile/:what" to="about/:what" />
			<Route path="*" component={ NotFound } />
		</Route>
	</Router>
);

export default routes;