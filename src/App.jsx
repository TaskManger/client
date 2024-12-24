import Home from './components/homePage/home'
import Video from './assets/bVdeo.mp4'
export default function App() {
  return<>
    <video autoPlay muted loop className="background-video">
      <source src={Video} type="video/mp4" />
    </video>
    <Home />
  </>
}