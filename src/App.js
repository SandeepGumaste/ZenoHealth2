import Clients from './components/Clients/Clients';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';
import FeaturedHotels from './components/FeaturedHotels/FeaturedHotels';
import Hero from './components/Hero/Hero';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <Hero/>
      <FeaturedHotels/>
      <Clients/>
      <ExploreNearby/>
    </div>
  );
}

export default App;
