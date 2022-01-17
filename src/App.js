import './App.css';
import  {CardList} from './components/card-list/card-list.component';
import {Component} from 'react';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
     /* monsters : [
        {name:'Farn'},{name:'parn'},{name:'sarn'},{name:'garn'}
      ]*/
      monsters : [],
      searchField : ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(users => this.setState({monsters:users}))
  
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={e => this.setState({searchField:e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
        
     
      </div>
    );
  }
}


export default App;
