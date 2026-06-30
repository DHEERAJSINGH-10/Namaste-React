import './App.css';
import { Header } from './Components/Header';
import { Banner } from './Components/Banner';
import { Hero  } from './Components/Hero';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { MovieDetails } from './Components/MovieDetails';

function App() {
return(
  <>
 <BrowserRouter> 
 <Header/>
<Routes>
  <Route path="/" element={<><Banner /><Hero /></>} />
  <Route path="/moviedetails/:moviesid" element={<MovieDetails/>}></Route>
</Routes>
</BrowserRouter>
  </>
)
}

export default App;
