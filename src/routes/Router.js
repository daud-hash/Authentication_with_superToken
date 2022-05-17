import React from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react';
import { BookStore } from '../components/books/BookStore';
import * as reactRouterDom from 'react-router-dom'
import { ThirdPartyEmailPasswordAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

export const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route path='/'> 
               {
                 <ThirdPartyEmailPasswordAuth onSessionExpired={
                   alert('Session is expired')
                 }>
                   <BookStore />
                 </ThirdPartyEmailPasswordAuth>
               }
            </Route>
        </Switch>
    </BrowserRouter>
  )
}