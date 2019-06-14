import React from "react";
import Card from "./components/Card";
// import { Users } from "./Users";

function CardList({ Users, searchedUsers }) {
  return (
    <div>
      {Users.map((user, i) => {
        return (
          <Card
            key={Users[i].id}
            id={Users[i].id}
            name={Users[i].name}
            email={Users[i].email}
          />
        );
      })}
    </div>
  );
}
export default CardList;
