import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Counter } from "./components/class/Counter";
import { Profile } from "./components/auth/Profile";
import { Private } from "./components/auth/Private";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Vishwas" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> 

      <Counter message="The count value is" />
      */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
