import "./styles.css";

export default function App() {
  //map

  const list = [1, 2, 3, 4];
  const dataList = [
    {
      name: "りんご",
      age: 10
    },
    {
      name: "さくら",
      age: 12
    }
  ];

  return (
    <div className="App">
      <h1>map practice</h1>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}

      {dataList.map((data) => (
        <div>{data.name}</div>
      ))}
    </div>
  );
}
