import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [personAge, setPersonAge] = useState('');
  const [company, setCompany] = useState('');
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const res = await axios.get('/api/people');
      //const res = await axios.get('http://backend.myapp.local:5000/api/people');
      setPeople(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //await axios.post('http://backend.myapp.local:5000/api/people', {
      await axios.post('/api/people', {
        name,
        age: personAge,
        company,
      });
      fetchPeople(); // refresh data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Submit Info</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Age"
          value={personAge}
          onChange={(e) => setPersonAge(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        /><br />
        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data</h3>
      <ul>
        {people.map((p, i) => (
          <li key={i}>{p.name} | {p.age} | {p.company}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
