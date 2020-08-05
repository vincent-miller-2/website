import React from 'react';
import { Route, Switch } from "react-router-dom";
import PageHeader from '../PageHeader';
import About from '../About';
import Work from '../Work';
import Education from '../Education';
import Footer from '../Footer';

export default function AppContent({ user }) {
  return (
    <>
      <PageHeader />
      <Switch>
        <Route exact path='/' render={() => <About user={user} />} />
        <Route path='/work' render={() => <Work work={user.work} />} />
        <Route path='/education' render={() => <Education education={user.education} />} />
      </Switch>
      <Footer />
    </>
  )
}