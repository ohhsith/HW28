import React from "react";
import Typography from "@mui/material/Typography";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function Doctors() {
  let { path, url } = useRouteMatch();
  const fakeData = [
    {
      id: 123,
      name: "Vasya",
    },
    {
      id: 456,
      name: "Olga",
    },
    {
      id: 789,
      name: "Vic",
    },
  ];
  return (
    <div>
      <h1>Doctors</h1>
      <ul>
        {fakeData.map((doc) => {
          return (
            <li key={doc.id} style={{ listStyle: "none" }}>
              <Link to={`${url}/${doc.id}`} style={{ textDecoration: "none" }}>
                {doc.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route path={`${path}/:doctorId`}>
          <Doctor />
        </Route>
      </Switch>
    </div>
  );
}

function Doctor() {
  let { doctorId } = useParams();
  return <Typography variant="h2">Requested Doctor ID: {doctorId}</Typography>;
}
