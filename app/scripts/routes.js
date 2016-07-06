import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

/*import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import NotFound from './pages/notFound.jsx';*/
import { About, App, Home, NotFound } from './pages'

/*import App2 from './components/App';
import Home2 from './components/Home';
import Foo from './components/Foo';
import Bar from './components/Bar';*/
import { App2, Home2, Foo, Bar } from './components'

const routes = (
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="home" component={ Home } />
			/*<Route path="about" component={ About } />
			<Route path="about/:what" component={ About } />*/
			<Route path="about(/:what)" component={ About } />
			<Redirect from="profile/:what" to="about/:what" />

			<Route path="counter" component={ App2 }>
				<IndexRoute component={ Home2 } />
				<Route path="foo" component={ Foo } />
				<Route path="bar" component={ Bar } />
			</Route>

			<Route path="*" component={ NotFound } />
		</Route>
	</Router>
);

export default routes;