import React, { lazy } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Home = lazy(() => import("../Components/home/Home"))
const Movies = lazy(() => import("../Components/movies/Movies"))
const Series = lazy(() => import("../Components/series/Series"))

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/movies",
        component: Movies,
    },
    {
        path: "/series",
        component: Series,
    },
]

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                {
                    routes.map(({ component: Component, ...routes }, index) => (
                        <Route
                            key={index}
                            {...routes}
                            render={props => <Component {...props} />} />
                    ))
                }
            </Switch>
        </BrowserRouter>
    )
}

export default Routing