import React, { useEffect, useState } from 'react';
import SearchBox from './Components/search-box/search-box-components';
import CardList from './Components/card-list/card-list-components';
import './App.css';

const App = ()=> {

const [searchField, setSearchField] = useState('');
const [monsters, setMonsters] = useState([]);
const [filteredMonsters, setFilteredMonsters] = useState(monsters);
console.log(1)
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())
  .then(users=>setMonsters(users));
}, []);

useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  })
  setFilteredMonsters(newFilteredMonsters);
}, [monsters, searchField]);

const onSearchChange = (e)=>{
  const searchFileldString = e.target.value.toLocaleLowerCase();
  setSearchField(searchFileldString);
}
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox placeholder='search-monsters' onChangeHandler={onSearchChange} className='monsters-search-box'></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
