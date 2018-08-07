import * as React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import { NotFound } from '../notFound/NotFound';
import { About } from '../../about/AboutPage';
import { Contact } from '../../contact/ContactPage';
import { FragmentPageContainer } from '../../fragment/FragmentPageContainer';

export function Router(): JSX.Element {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={FragmentPageContainer} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route component={NotFound}/>
            </Switch>
        </HashRouter>
    );
}
