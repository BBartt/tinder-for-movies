import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ChoseMoviePage from './pages/ChoseMoviePage';
import ContactPage from './pages/ContactPage';
import { routes } from './routes';

const App: React.FC = () => {
  return (
    <HashRouter>
      <>
        <Header>Tinder for movies</Header>

        <main className="main">
          <Switch>
            <Route path={routes.home}>
              <ChoseMoviePage />
            </Route>
            <Route path={routes.contact}>
              <ContactPage />
            </Route>
          </Switch>
        </main>

        <Footer />
      </>
    </HashRouter>
  );
};

export default App;
