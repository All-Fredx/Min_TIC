import "./App.css";

function App() {
  return (
    <div className="mx-auto bg-stone-300 justify-items-center">
      <h1 className="text-3xl font-bold underline text-center py-5">Hello world!</h1>
      <table className="border-separate border-spacing-1 border border-slate-500 mx-auto">
        <thead>
          <tr>
            <th className="border border-slate-600 text-center">State</th>
            <th className="border border-slate-600 text-center">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 text-center">Indiana</td>
            <td className="border border-slate-700 text-center">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-700 text-center">Ohio</td>
            <td className="border border-slate-700 text-center">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-700 text-center">Michigan</td>
            <td className="border border-slate-700 text-center">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
