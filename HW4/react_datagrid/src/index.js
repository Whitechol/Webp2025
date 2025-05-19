import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field: 'title', headerName: '名稱', flex: 1},
  {field: 'location', headerName: '地點', flex: 1},
  {field: 'price', headerName: '票價', flex: 1}
];

const url = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';

const {useState, useEffect} = React;
function TripTable() {
  const [rows, setrows] = useState([]);

  useEffect(() => {
    fetch(url, {method: 'GET'}).then(res => res.json()).then(response => {
      let datas = [];
      response.forEach(function(data) {
          datas.push({
              UID: data["UID"],
              title: data["title"],
              location: data["showInfo"][0]["location"],
              price: data["showInfo"][0]["price"]
          });
      });
      setrows(datas);
    }).catch(error => console.error(error));
  }, []);

  return (
    <DataGrid rows={rows} columns={columns} getRowId={(row) => row.UID} initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}></DataGrid>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TripTable />
  </React.StrictMode>
);

reportWebVitals();
