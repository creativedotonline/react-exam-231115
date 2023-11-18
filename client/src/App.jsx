
//import { useState } from 'react'

import './assets/css/bootstrap.css'
import './assets/css/font-awesome.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'

import {Routes, Route} from 'react-router-dom'
import PageHome from './components/PageHome'
import PageUserList from './components/users/PageUserList'
import PagePost from './components/post/PagePost'
import PostSingle from './components/post/PostSingle'
import PageCharacterList from './components/PageCharacterList'
import CharacterDetails from "./components/CharacterDetails"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NotFound from "./components/notfound/NotFound"
import PageRegister from './components/register/PageRegister'
import PagePostCreate from "./components/post/PagePostCreate"
import PagePostList from "./components/post/PagePostList"
import PostDetails from "./components/post/post-details/PostDetails"


function App() {
// const [count, setCount] = useState(0)

	return (
	<>   
	<Header />
	<Routes>
		<Route className="home-page" path="/" element={<PageHome />} />
		<Route path="/user-list" element={<PageUserList />} />
		<Route path="/post" element={<PagePost />} />
		<Route path="/post/:id" element={<PostSingle />} />
		<Route path='/post-create' element={<PagePostCreate />} />
		<Route path="/character-list" element={<PageCharacterList />} />
		<Route path="/character-List/:id" element={<CharacterDetails />} /> 
		<Route path="*" element={<NotFound />} />
		<Route path='/register' element={<PageRegister />} />
		<Route path='post-list' element={<PagePostList />}/>
		<Route path='post-list/:postId' element={<PostDetails />} />
	</Routes>
	<Footer />
	</>
	)
}

export default App
