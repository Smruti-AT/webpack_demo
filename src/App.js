import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fun = async() => {
      const module = await import('./sdk/dist/sdk')
      const MyClass = module.MyClass;
      const myObj = new MyClass();
      console.log(myObj.environment);
      console.log(myObj.homePage);
    }
    fun();
  }, [])
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
