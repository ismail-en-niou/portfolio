import Header from './components/1-header/headr';
import Hero from './components/2-hero/hero';
import Main from './components/3-main/Main';
import ContactUs  from'./components/4-contact/ContactUs';
import Footer from './components/5-footer/footer';

function App() {

  return (
      <div id='up'  className='container'>
      <Header /> 
      <Hero /> 
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <ContactUs />
      <div className="divider"></div>
      <Footer />
      
     <a href="#up">
     <button type='button' className='icon-keyboard_arrow_up scroll2top'></button>
     </a>
   
      </div>
  );
}

export default App
