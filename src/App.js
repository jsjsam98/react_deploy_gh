import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
	return (
		<div className="App">
			<DataProvider>
				<Header title="React JS Blog" />
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="post" element={<NewPost />} />
					<Route exact path="/edit/:id" element={<EditPost />} />
					<Route exact path="/post/:id" element={<PostPage />} />
					<Route exact path="/about" element={<About />} />
					<Route path="*" element={<Missing />} />
				</Routes>
				<Footer />
			</DataProvider>
		</div>
	);
}

export default App;
