import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FeaturedPage from './pages/FeaturedPage';
import ExplorePage from './pages/ExplorePage';
import MyActivityPage from './pages/MyActivityPage';
import NotFound from './pages/NotFound';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/post';

function Routes() {
  const dispatch = useDispatch();

  //This will mount on first load of component but if we give dependency array then
  // it will load everytime whenever dependent state is mutated
  useEffect(() => {
    dispatch(getPosts());
    return () => {};
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FeaturedPage} />
        <Route path="/featured" exact component={FeaturedPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/myactivity" component={MyActivityPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
