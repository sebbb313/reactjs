import logo from './logo.svg';
import './App.css';
import sample from './reactjs.mp4';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f7f3', height: '100vh', width: '100vw', padding: '0px', margin: '0' }}>





      <nav className="navigationBar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <div style={{ paddingRight: '135px' }}>This is text</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
          <div style={{ marginRight: '15px' }}>text</div>
          <div style={{ marginRight: '15px' }}>text</div>
          <div style={{ marginRight: '15px' }}>text</div>
        </div>
      </nav>


      <hero className="heroSection" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <heroHeader style={{ width: '50%', display: 'flex', flexWrap: 'wrap', fontSize: '40px', justifyContent: 'center' }}>
          <p>Visual Poetry</p>
        </heroHeader>



        <heroImage style={{ width: '50%', display: 'flex', flexWrap: 'wrap', fontSize: '40px', justifyContent: 'center' }}>
          <p>Visual Poetry</p>
        </heroImage>
      </hero>



      <recentProjects style={{ display: 'flex', flexDirection: 'column' }}>
        <project style={{ display: 'flex', justifyContent: 'left' }}>project</project>
        <project style={{ display: 'flex', justifyContent: 'left' }}>project</project>
        <project style={{ display: 'flex', justifyContent: 'left' }}>project</project>
        <project style={{ display: 'flex', justifyContent: 'left' }}>project</project>
      </recentProjects>





    </div>
  );
}

export default App;
