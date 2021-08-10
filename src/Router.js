import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Colors from './screens/Colors'
import { Box } from '@material-ui/core'


export class Router extends Component {
    render() {
        return (
            <Box display='flex' justifyContent="center" alignItems="center" marginTop="calc(64px + 10vh)" >
                <BrowserRouter>
                    <Switch>
                        <Route path="/">
                            <Colors />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Box>
        )
    }
}

export default Router
