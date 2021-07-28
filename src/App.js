import Header from './components/partials/Header';
import Hero from './components/base/Hero';
import Terms from './components/partials/Terms';
import Categories from './components/partials/Categories';
import Footer from './components/partials/Footer';
import './styles/general.scss';

function App() {
  return (
    <div className="body">
      <Header />
      <Hero />
      <Terms />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
