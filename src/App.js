import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Gallery from './components/Gallery';

import charlieImg from './media/charlie.jpg';
import rubyImg from './media/ruby.jpg';
import bagelImg from './media/bagel.jpg';
import ceceImg from './media/cece.jpg';

function App() {
  let title = 'Kitty Cat Club';

  const navLinks = [
    { index: 0, name: 'About', url: 'https://www.components.com/about'},
    { index: 1, name: 'Projects', url: 'https://www.components.com/projects'},
    { index: 2, name: 'Contact', url: 'https://www.components.com/contact'},
    { index: 3, name: 'Blogs', url: 'https://www.components.com/blogs'}
  ]

  const kitties = [
    {
      id: 1001,
      title: 'Charlie',
      poster: 'charlieImg'
    },
    {
      id: 1002,
      title: 'Ruby',
      poster: 'rubyImg'
    },
    {
      id: 1003,
      title: 'Bagel',
      poster: 'bagelImg'
    },
    {
      id: 1004,
      title: 'Cream Cheese',
      poster: 'ceceImg'
    }
  ]
      return (
    <>
      <Header title={title} navLinks={navLinks} />
      <main>
        <Banner></Banner>
        <div className='container'>
          <Gallery list={kitties} />
        </div>
      </main>
      <Footer title={title} navLinks={navLinks} />
    </>
  );
}

export default App;

