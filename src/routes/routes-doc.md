# React Router DOM
react-router-dom v6
``` bash
npm i react-router-dom --save
```

- `src/routes/PrivateRoute.js`
- `src/routes/RouteService.js`
- `src/routes/RouteStacks.js`

## PrivateRoute.js
```jsx
import { Navigate, useLocation } from 'react-router-dom'
import URLS from '@/src/enums/urls'

const PrivateRoute = ({ children, path, navigateTo = URLS.LOGIN, allow = [] }) => {
	const location = useLocation()
	const allowBoolExec = location.pathname === path ? allow.map((func) => func()) : [true]
	return !allowBoolExec.includes(false) ? children : <Navigate to={navigateTo} />
}

export default PrivateRoute
```

## RouteService.js
``` jsx
import { HashRouter as Router } from 'react-router-dom'
import Pages from '@/src/routes/RouteStacks'

const RouteService = () => {
	return (
		<Router>
			<Pages />
		</Router>
	)
}

export default RouteService
```

## RouteStacks.js
``` jsx
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '@/src/routes/PrivateRoute'
import configureStore from '@/src/store'
import URLS from '@/src/enums/urls'

import { Navigate } from 'react-router-dom'
import { isEmpty } from 'lodash'
import AUTH_GETTERS from '../store/modules/Auth/getters'

// store
const { store } = configureStore()
// pages
const Home = lazy(() => import('../pages/Home'))
const Page404 = lazy(() => import('../pages/404'))
const Login = lazy(() => import('../pages/Login'))
const Profile = lazy(() => import('../pages/Profile'))
const Settings = lazy(() => import('../pages/Settings'))

const RouteStacks = () => {
	const loggedIn = () => {
		return !isEmpty(AUTH_GETTERS.loginToken(store.getState()))
	}
	const loggedOut = () => {
		return isEmpty(AUTH_GETTERS.loginToken(store.getState()))
	}

	return (
		<Routes>
			<Route exact path={URLS.LANDING} element={<Navigate to={URLS.HOME} />} />
			<Route path={URLS.HOME} element={<Home />} />
			<Route
				path={URLS.LOGIN}
				element={
					<PrivateRoute path={URLS.LOGIN} allow={[loggedOut]} navigateTo={URLS.PROFILE}>
						<Login />
					</PrivateRoute>
				}
			/>
   <Route
				path={URLS.PROFILE}
				element={
					<PrivateRoute path={URLS.PROFILE} allow={[loggedIn]} navigateTo={URLS.LOGIN}>
						<Profile />
					</PrivateRoute>
				}
			/>

			{/* keep  <Route path="*"> being the last of siblings */}
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}
export default RouteStacks

```
