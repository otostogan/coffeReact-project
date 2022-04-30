import { useState, lazy, Suspense} from "react";
import {Container} from "react-bootstrap";


import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";


import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";

const MainPage  = lazy(() => import("../pages/MainPage"));
const AboutPage  = lazy(() => import("../pages/AboutPage"));
const SingleCoffe  = lazy(() => import("../pages/SingleCoffe"));
const PleasurePage  = lazy(() => import("../pages/Pleasure"));
const Page404 = lazy(() => import('../pages/404'));



	
const App = () => {

	// const [page, setPage] = useState('main-page'); 

	
	
	return(
		<>	
			<Router>
				<Container>
					<Header/>
				</Container>
				<Suspense fallback={<div>Загрузка...</div>}>
					<Routes>
						<Route path="/" element={<MainPage />}/>
						<Route path="/availability" element={<AboutPage />}/>
						<Route path="/pleasure" element={<PleasurePage  />}/>
						<Route path="/availability/:type/:availabilityID" element={<SingleCoffe />}/>
						<Route path="*" element={<Page404/>}/>
					</Routes>
				</Suspense>
				<Footer/>
			</Router>
		</>
	)
}


export default App;
