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
			<Route
				path={URLS.PROFILE}
				element={
					<PrivateRoute path={URLS.PROFILE} allow={[loggedIn]} navigateTo={URLS.LOGIN}>
						<Profile />
					</PrivateRoute>
				}
			/>
			{/* <Route
				path={'/about'}
				element={
					<PrivateRoute path={'/about'} allow={[loggedOut]} beforeEnter={beforeEnter}>
						<Home />
					</PrivateRoute>
				}
			/> */}
			<Route
				path={URLS.SETTINGS}
				element={
					<PrivateRoute path={URLS.SETTINGS} allow={[loggedIn]} navigateTo={URLS.LOGIN}>
						<Settings />
					</PrivateRoute>
				}
			/>

			<Route path={URLS.HOME} element={<Home />} />
			<Route
				path={URLS.LOGIN}
				element={
					<PrivateRoute path={URLS.LOGIN} allow={[loggedOut]} navigateTo={URLS.PROFILE}>
						<Login />
					</PrivateRoute>
				}
			/>

			{/* keep  <Route path="*"> being the last of siblings */}
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}
export default RouteStacks
