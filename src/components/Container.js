import React from 'react';

import { data } from '../data';

const Container = () => {
  const [staff, setStaff] = React.useState(data);

  function clearPeople(id) {
    setStaff(staff.filter((people) => id !== people.id));
  }

  return (
    <React.Fragment>
      <section className="container">
        {staff.map((person) => {
          return (
            <div className="item" key={person.id}>
              <img src={person.img} alt="" />
              <h3>{person.name}</h3>
              <p>{person.job}</p>

              <button type="button" className="clear" onClick={() => clearPeople(person.id)}>
                X
              </button>
            </div>
          );
        })}

        <button className="clear-all" onClick={() => setStaff([])}>
          Clear All
        </button>
      </section>
    </React.Fragment>
  );
};

export default Container;
