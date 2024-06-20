import React, { useEffect } from 'react';
import './styles/style.css'; // Убедитесь, что путь к стилям правильный
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    // Если в скрипте есть вызовы, которые нужно выполнять при монтировании компонента
  }, []);

  return (
    <div className="App">
      <Header />
      <MainSection />
      <main>
        <AboutSection />
        <hr />
        <ServicesSection />
        <hr />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
