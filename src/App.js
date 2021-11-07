import './App.css';
import Listing from './components/Listing';
const data = require('./etsy.json');

export default function App() {
  return <Listing items={data} />;
}
