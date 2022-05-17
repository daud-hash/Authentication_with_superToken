
import './App.css';
import SuperTokens from "supertokens-auth-react";
import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import ThirdPartyEmailPassword, {Github, Google, Facebook} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { Header } from './components/header/Header';
import { Router } from './routes/Router';


SuperTokens.init({
  appInfo: {
    appName: 'auth-with-supertokens',
    apiDomain: 'http://localhost:3001/',
    websiteDomain: 'http://localhost:3000/',
    apiBasePath: '/api/auth',
    websiteBasePath: '/auth'
  },
  recipeList: [ThirdPartyEmailPassword.init({
    signInAndUpFeature: {
      providers: [
        Github.init(),
        Google.init(),
        Facebook.init()
      ]
    }
  }), Session.init()]
})
export const App = () => { 
  async function logout() {
    await signOut()
    window.location.href = '/';
  }
  return (
    <div>
      <Header onLogout = {logout}/>
      <Router />
    </div>
  );
}
