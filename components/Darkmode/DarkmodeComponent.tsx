import React from 'react';
import Card from './components/Card'; 
import Footer from './components/Footer_component'; 
import Head from './components/Head'; 
import '../../styles/Darkmode.css'; 

const DarkmodeComponent: React.FC = () => {
    return (
      <>
        <Head />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Card />
          <Footer />
          
        </div>
      </>
    );
  };
  
  export default DarkmodeComponent;