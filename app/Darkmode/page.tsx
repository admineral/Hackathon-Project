import React from 'react';
import Card from '../../components/Darkmode/components/Card'; // Adjust the path as necessary
import Footer from '../../components/Darkmode/components/Footer_component'; // Assuming this remains unchanged
//import '../../styles/Darkmode.css'; 


const Page: React.FC = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Card />
        <Footer />
      </div>
    );
};

export default Page;