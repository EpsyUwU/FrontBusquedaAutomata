import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (query) {
      fetch('http://localhost:8000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campo: 'Correo ',
          valor: query,
        }),
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error:', error));
    } else {
      setData([]);
    }
  }, [query]);

  return (
    
    <div className="App bg-gray-900 min-h-screen">
      <div className="p-4 m-2 bg-gray-900"></div>
      <form className="max-w-md mx-auto">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input onChange={(event) => setQuery(event.target.value)} value={query} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busqueda por correo..." required />
        </div>
      </form>
      <div className="p-4 m-2 bg-gray-900"></div>
      {Array.isArray(data) ? (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-6 py-3">Clave cliente</th>
                <th scope="col" className="px-6 py-3">Correo</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Teléfono Contacto</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-3">{item['Clave cliente']}</td>
                  <td className="px-6 py-3">{item['Correo ']}</td>
                  <td className="px-6 py-3">{item['   Nombre Contacto ']}</td>
                  <td className="px-6 py-3">{item['Teléfono Contacto  ']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default App;



