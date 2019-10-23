import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux"
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions"

class App extends Component {

  unsubScribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }


    })
  }

  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    console.log(currentUser)
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin'
            component={SignInAndSignUpPage}
            render={() => currentUser ? (<Redirect to="/" />)
              :
              (<SignInAndSignUpPage />
              )} />
        </Switch>
      </div >
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);