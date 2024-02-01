
import Header from '../components/layout/Header';
import DarkmodeComponent from '../components/Darkmode/DarkmodeComponent'; 


export default function Home() {


  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <DarkmodeComponent />
      </div>
      
    </>
  );
}