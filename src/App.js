import './App.css';

import Navbar from '../src/components/pages/Navbar'
import Banner from '../src/components/pages/Banner'
import Photo from '../src/components/pages/Photo'
import Intro from '../src/components/pages/Intro'
import Content from '../src/components/pages/Content'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='pageContainer'>
        <Banner />
        <Photo />
        <Intro />
        <Content />
      </div>
      
    </div>
  );
}

export default App;
