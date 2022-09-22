import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({});

  const keyByClassReducer = (acc, drData) => {
    const key = drData.class;
    const val = acc[key] ? [...acc[key], drData] : [drData];
    acc[key] = val;

    return acc;
  };

  const fetchJsonDataAndReduce = () => {
    fetch('./data/wowDiminishingReturns.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(response => response.json())
      .then(json => {        
        let byClassData = json.reduce(keyByClassReducer, {});

        let newState = {
          spellDataByClass : byClassData
        };
        
        setState(newState);
      });
  };

  const renderClassDrList = (className, spellList) => {
    return (
      <>
        <h4>{className}</h4>
        
        <table>
          <thead>
            <tr>
              <th>Spell</th>
              <th>DR School</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
          {
            spellList.map(spellData => {
              return (     
                <tr>
                  <td>{spellData.spell}</td>
                  <td>{spellData.drSchool}</td>
                  <td>{spellData.note}</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </>
    )
  };

  useEffect(() => {
    fetchJsonDataAndReduce();
  }, []);

  return (
    <div className="">
      <h3>DR by Class:</h3>

      { 
        state.spellDataByClass && Object.entries(state.spellDataByClass).length > 0 &&
        Object.entries(state.spellDataByClass).map(([className, spellList]) => {
          return renderClassDrList(className, spellList);
        })
      }

    </div>
  );
}

export default App;
