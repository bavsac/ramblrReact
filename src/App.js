import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsmobile);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          trying to change things up.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App, {
  includeGreetings: true,
  usernameAttributes: 'username'
});
