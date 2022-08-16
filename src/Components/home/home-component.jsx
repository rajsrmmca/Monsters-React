import CardList from '../card-list/card-list-components';
import SearchBox from '../search-box/search-box-components' 
import React, { useEffect, useState } from 'react';

const Home = ()=>{
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
    )
}

export default Home;