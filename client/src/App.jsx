
import { useState } from 'react'

import './assets/css/bootstrap.css'
import './assets/css/font-awesome.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'

import {Routes, Route} from 'react-router-dom'
import PageHome from './components/PageHome'
import PageUserList from './components/users/PageUserList'
import PagePost from './components/post/PagePost'
import PostDetails from './components/post/PostDetails'
import PageCharacterList from './components/PageCharacterList'
import CharacterDetails from "./components/CharacterDetails"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NotFound from "./components/notfound/NotFound"
import PageRegister from './components/forms/PageRegister'

function App() {
const [count, setCount] = useState(0)

	return (
	<>   
	<Header />
	<Routes>
		<Route className="home-page" path="/" element={<PageHome />} />
		<Route path="/UserList" element={<PageUserList />} />
		<Route path="/Post" element={<PagePost />} />
		<Route path="/Post/:id" element={<PostDetails />} />
		<Route path="/CharacterList" element={<PageCharacterList />} />
		<Route path="/CharacterList/:id" element={<CharacterDetails />} /> 
		<Route path="*" element={<NotFound />} />
		<Route path="/Register" element={<PageRegister />} />
		<Route path='/PageRegister' element={<PageRegister />} />
	</Routes>
	<Footer />
	</>
	)
}

export default App
