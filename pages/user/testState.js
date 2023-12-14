import { useReducer } from 'react';

const App = () => {
  const [object, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "update":
          return {
            ...state,
            [action.payload.name]: action.payload.value,
          };
        default:
          return state;
      }
    },
    // {}
    
  );
  

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "update",
      payload: {
        name,
        value,
      },
    });
  };
  console.log(object)
  return (
    <div>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="text" name="age" onChange={handleInputChange} />
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </div>
  );
};
export default App;