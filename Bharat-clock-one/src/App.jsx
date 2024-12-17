import ClockHeading from './components/clockheading';
import ClockSlogan from './components/clockSlogan';
import CurrentTime from './components/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
function App() {
return (
  <center> 
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
  );
}
export default App
