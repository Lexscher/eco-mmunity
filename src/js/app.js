import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './redux/actions';

// Components
import NavBar from './NavBar';
import Dashboard from './containers/Dashboard';
import Profile from './containers/Profile';
import ListCommunities from './containers/ListCommunities';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <Switch>
        <header className="header">
          <h1>Eco-mmunity</h1>
          <ListCommunities />
          <NavBar />
        </header>
        <div className="app">
        <Route
          exact
          path="/eco-mmunity"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        <Route
          path="/eco-mmunity/assimilate"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        {/* user */}
        <Route
          path="/eco-mmunity/user/:username"
          render={routerProps => <Profile {...routerProps} />}
        />
        <Route
          path="/eco-mmunity/user/:username/communities"
          render={routerProps => (
            <div {...routerProps}>filler: Users communities</div>
          )}
        />
        <Route
          path="/eco-mmunity/user/:username/posts"
          render={routerProps => (
            <div {...routerProps}>filler: Users posts</div>
          )}
        />
        <Route
          path="/eco-mmunity/user/:username/comments"
          render={routerProps => (
            <div {...routerProps}>filler: Users comments</div>
          )}
        />
        {/* Community */}
        <Route
          path="/eco-mmunity/eco/:community"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        <Route
          path="/eco-mmunity/eco/:community/edit"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        {/* Comments on a Post/single post */}
        <Route
          path="/eco-mmunity/eco/:community/comments/:postId/:postSlug"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        <Route
          path="/eco-mmunity/eco/:community/comments/:postId/:postSlug/edit"
          render={routerProps => <Dashboard {...routerProps} />}
        />
        </div>
      </Switch>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getCurrentUser: userActions.getCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
