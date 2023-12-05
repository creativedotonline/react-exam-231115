
//import { useState } from 'react'

// import './assets/css/bootstrap.css'
import './assets/css/font-awesome.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'

import { Routes, Route } from 'react-router-dom'

import {AuthPovider} from './contexts/authContext.jsx'
import Path from './paths'


import PageHome from './components/PageHome'
import PageUserList from './components/users/PageUserList'
import PagePost from './components/post/PagePost'
import PostSingle from './components/post/PostSingle'
import PageCharacterList from './components/PageCharacterList'
import CharacterDetails from "./components/CharacterDetails"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NotFound from "./components/notfound/NotFound"
import PageLoginReg from './components/PageLoginReg'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from "./components/logout/Logout"
import PagePostCreate from "./components/post/PagePostCreate"
import PagePostList from "./components/post/PagePostList"
import PagePostDetails from "./components/post/PagePostDetails.jsx"
import ErrorBoundary from './error-boundary/ErrorBoundary.jsx'
import AuthGuard from "./guards/AuthGuard.jsx"
import PagePostEdit from "./components/post/PagePostEdit"
import LatestPost from "./components/post/latest-post/LatestPost"
import PageTestimonials from "./components/PageTestimonials"
import PageAccount from "./components/PageAccount"

function App() {
	
	return (

		<>
		<div className="wrapper">
		<ErrorBoundary >
			<AuthPovider >
				<Header />
				<Routes>
					<Route className="home-page" path={Path.Home} element={<PageHome />} />
					<Route path="/user-list" element={<PageUserList />} />
					<Route path="/post" element={<PagePost />} />
					<Route path="/post/:id" element={<PostSingle />} />
					
					<Route path="/character-list" element={<PageCharacterList />} />
					<Route path="/character-List/:id" element={<CharacterDetails />} />
					<Route path="*" element={<NotFound />} />
					<Route path={Path.PageLoginReg} element={<PageLoginReg />} />
					<Route path={Path.Login} element={<Login />} />
					<Route path={Path.Register} element={<Register />} />
					<Route path={Path.PostsList} element={<PagePostList />} />
					<Route path={Path.PagePostDetails} element={<PagePostDetails />} />
					<Route path={Path.LatestPost} element={<LatestPost />} />
					<Route path='/testimonials' element={<PageTestimonials />} />

					<Route element={<AuthGuard />}>
						<Route path={Path.PagePostCreate} element={<PagePostCreate />} />
						<Route path={Path.Logout} element={<Logout />} />
						<Route path={Path.PagePostEdit} element={<PagePostEdit />} />
						<Route path={Path.PageAccount} element={<PageAccount />} />
					</Route>
				</Routes>
				<Footer />
			</AuthPovider>
			</ErrorBoundary>
			</div>
		</>
	)
}

export default App
