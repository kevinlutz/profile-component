import userData from './userData'
import './App.css';
import Profile from './Profile'

function App() {
  return (
    <div className="App">
      {userData.map((user) => (
        <Profile userData={user}/>
      ))}
    </div>
  );
}

export default App;
