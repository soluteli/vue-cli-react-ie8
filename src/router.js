import React from 'react'
import {Router, Route, IndexRedirect} from 'react-router'
import { component } from 'react-router/lib/PropTypes';
import routerData from "../.tmp/routerData";
import B from './b'
import Loadable from "react-loadable";

const routes = routerData.map(item => {
  const { title, pages } = item
  
  const childRoutes = []
  const visitedNames = []
  pages.forEach(page => {
    const {default: _d, __esModule,...demos} = page
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


function BecomeAsyncComponent(p) {
  return Loadable({
    loader: () => import(p),
    loading() {
      return <div>Loading...</div>
    }
  });
}

// {/* <Route path="dynamic" component={null} getComponent={(_l, cb) => {
//     console.log('dynamic')
//     import(/* webpackChunkName:"dynamic-a" */'./dynamic-a.js')
//       .then(r => cb(null, r.default))
//       .catch(err => {throw err})
// }}></Route> */}


function APPRouter() {
  return (
    <Router>
      <Route path="/">
        <Route path="b" component={B}></Route>
        <Route path="dynamic" component={BecomeAsyncComponent('./dynamic-a.js')}></Route>
        {routes.map(r => {
          console.log('r.path', r.path)
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
      </Route>
      
    </Router>
  )
}

export default APPRouter