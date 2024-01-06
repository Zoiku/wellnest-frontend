import "../styles/Table.css";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rows, columns }) => {
  const tableState = {
    pagination: {
      paginationModel: {
        pageSize: 10,
      },
    },
  };

  return (
    <DataGrid
      className="table"
      density={"compact"}
      rows={rows}
      columns={columns}
      initialState={tableState}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
};

export default Table;
