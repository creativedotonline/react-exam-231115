
//import { useState } from 'react'

import './assets/css/bootstrap.css'
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
import Account from './components/PageLoginReg'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from "./components/logout/Logout"
import PagePostCreate from "./components/post/PagePostCreate"
import PostEdit from "./components/post/post-edit/PostEdit.jsx"
import PagePostList from "./components/post/PagePostList"
import PostDetails from "./components/post/post-details/PostDetails"
import ErrorBoundary from './error-boundary/ErrorBoundary.jsx'

function App() {
	
	return (

		<>
		<ErrorBoundary >
			<AuthPovider >
				<Header />
				<Routes>
					<Route className="home-page" path={Path.Home} element={<PageHome />} />
					<Route path="/user-list" element={<PageUserList />} />
					<Route path="/post" element={<PagePost />} />
					<Route path="/post/:id" element={<PostSingle />} />
					<Route path='/post-create' element={<PagePostCreate />} />
					<Route path="/character-list" element={<PageCharacterList />} />
					<Route path="/character-List/:id" element={<CharacterDetails />} />
					<Route path="*" element={<NotFound />} />
					<Route path={Path.Account} element={<Account />} />
					<Route path={Path.Login} element={<Login />} />
					<Route path={Path.Register} element={<Register />} />
					<Route path={Path.Logout} element={<Logout />} />
					<Route path={Path.PostsList} element={<PagePostList />} />
					<Route path={Path.SinglePostId} element={<PostDetails />} />
					<Route path={Path.SinglePostIdEdit} element={<PostEdit />} />
				</Routes>
				<Footer />
			</AuthPovider>
			</ErrorBoundary>
		</>
	)
}

export default App
