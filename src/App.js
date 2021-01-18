import { Container, Grid } from '@material-ui/core';

import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';


import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Container className={'top-sixty'}>
      <Grid container spacing={7}>

        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        
        <Grid item xs style={{background: 'red'}}>
          <Header />

          
          <Router>
            <Switch>
              <Route path="/portfolio"><Portfolio /></Route>
              <Route path="/"><Resume /></Route>             
            </Switch>
          </Router>
          
          <Footer />
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;