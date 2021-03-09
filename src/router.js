import React from 'react'
import {Router, Route, IndexRedirect} from 'react-router'
import routerData from "../.tmp/routerData";

const routes = routerData.map(item => {
  const { title, pages } = item
  
  const childRoutes = []
  const visitedNames = []
  pages.forEach(page => {
    const {default: _d, ...demos} = page
    const names = Object.keys(demos)
    names.forEach(n => {
      if (!visitedNames.includes(n)) {
        visitedNames.push(n)
        childRoutes.push({
          path: n,
          component: demos[n]
        })
      }
    })
  })

  return {
    path: '/' + encodeURIComponent(title),
    title,
    childRoutes
  }
})

function APPRouter() {
  return (
    <Router>
      {routes.map(r => {
        return (
          <Route key={r.path} path={r.path} >
            <IndexRedirect to={r.childRoutes[0].path} />
            {
              r.childRoutes.map(cr => (
                <Route key={cr.path} path={cr.path} component={cr.component} />
              ))
            }
          </Route>
        )
      })}
    </Router>
  )
}

export default APPRouter