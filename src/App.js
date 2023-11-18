import Clients from './components/Clients/Clients';
import Trust from './components/Trust/Trust';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';
import FeaturedHotels from './components/FeaturedHotels/FeaturedHotels';
import Hero from './components/Hero/Hero';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <div>
      <Hero/>
      <Offers/>
      <FeaturedHotels/>
      <Clients/>
      <ExploreNearby/>
      <Trust/>
    </div>
  );
}

export default App;
