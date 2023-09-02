import React from "react";
import './styles.css';

class App extends React.Component 
{
  // Constructor
  constructor(props)
  {
    super(props);

    this.state =
    {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => 
    {
      this.setState
      ({
        items: json,
        DataisLoaded: true
      });
    })
  }
  render()
  {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) 
      return <div><h1>Veuillez patienter s'il vous plait ...</h1></div>;

    return (
      <div className="container">
        <h1> Recover users data </h1> 
        {
          items.map((item) => (
            <ol key = { item.id }>
              Username: { item.username },
              Lastname: { item.name }
            </ol>
          ))
        }
        <p> Hello World!</p>
      </div>
    );
  }
}

export default App;