import React from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react';
import { BookStore } from '../components/books/BookStore';
import * as reactRouterDom from 'react-router-dom'
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";

export const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route path='/'> 
            <EmailPassword.EmailPasswordAuth
            onSessionExpired={() => {
                alert('Session Expired')
            }}>
                <BookStore />
            </EmailPassword.EmailPasswordAuth>
            </Route>
        </Switch>
    </BrowserRouter>
  )
}