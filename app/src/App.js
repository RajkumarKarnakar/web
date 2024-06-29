import './App.css';
import { RegularList } from './firstList&Data/RegularList';
import { SmallPerson } from './firstList&Data/peoples/SmallProductPerson';
const people = [{
  name: 'Rajkumar Karnakar',
  age: 22,
  DOB: new Date(2000,2,10),
  hobbies: ['swimming', 'bicycling', 'video games']
},
{
  name: 'Laxmi Karnakar',
  age: 19,
  DOB: new Date(2002,11,12),
  hobbies: ['cards', 'maths', 'science', 'badminton']
}];
const me = {
  name: 'Rajkumar Karnakar',
  
  DOB: '2000-03-10',
  hobbies: ['swimming', 'bicycling', 'video games']
};

const products = [{
  name: 'smart-TV',
  price: '₹35000',
  decscription: 'huge tv with great deal',
  rating: 4.5,
},{
  name: 'running shoes',
  price: '₹2500',
  decscription:'state-of-the-art technology for optimum running',
  rating: 3.9,
}]
function App() {
  return (
    <div className="App">
      <RegularList 
      items ={people}
      resourceName = "sampleData"
      itemComponent={SmallPerson}></RegularList>
    </div>
  );
}

export default App;
