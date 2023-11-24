
//import { useState } from 'react'

import './assets/css/bootstrap.css'
import './assets/css/font-awesome.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'

import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import * as authService from "./services/authService"
import AuthContext from './contexts/authContext'
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
import Account from './components/PageAccount'
import Login from './components/login/Login'
import PagePostCreate from "./components/post/PagePostCreate"
import PagePostList from "./components/post/PagePostList"
import PostDetails from "./components/post/post-details/PostDetails"


function App() {
	const navigate = useNavigate();
	const [auth, setAuth] = useState({});
	
	const loginSubmitHandler = async (values) => {
		const result = await authService.login(values.email, values.password);

		setAuth(result);
		navigate(Path.Home);
	};
	const values = {
		loginSubmitHandler,
		username: auth.username,
		email: auth.email,
		isAuthenticated: !!auth.username,
	};
	return (
		
		<>
		<AuthContext.Provider value={loginSubmitHandler}>
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
				<Route path='/account' element={<Account />} />
				<Route path='/login' element={<Login />} />
				<Route path={Path.PostsList} element={<PagePostList />} />
				<Route path='post-list/:postId' element={<PostDetails />} />
			</Routes>
			<Footer />
			</AuthContext.Provider>
		</>
	)
}

export default App
