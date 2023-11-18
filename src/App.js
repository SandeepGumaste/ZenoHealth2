import Clients from './components/Clients/Clients';
import Trust from './components/Trust/Trust';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';
import FeaturedHotels from './components/FeaturedHotels/FeaturedHotels';
import Hero from './components/Hero/Hero';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Offers from './components/Offers/Offers';
import BestDeals from './components/BestDeals/BestDeals';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offers/>
      <BestDeals/>
      <FeaturedHotels/>
      <Clients/>
      <ExploreNearby/>
      <Trust/>
    </div>
  );
}

export default App;
