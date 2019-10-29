import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;