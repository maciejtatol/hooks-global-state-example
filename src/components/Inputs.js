import React, { useContext } from "react";
import GlobalState from "../state";

export default () => {
  const {
    state: { name, surname },
    actions: { setName, setSurname }
  } = useContext(GlobalState.Context);

  return (
    <div className="form-group">
      <p>
        <span>Name:</span>
        <input
          className="form-control"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </p>
      <p>
        <span>Surname:</span>
        <input
          className="form-control"
          onChange={e => setSurname(e.target.value)}
          value={surname}
        />
      </p>
    </div>
  );
};
