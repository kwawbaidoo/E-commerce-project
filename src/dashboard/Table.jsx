import React from "react";
const Table=() => {
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
    const [data, setData] = React.useState(tableDataItems);
    const handleRowSelected = React.useCallback(state => {
      setSelectedRows(state.selectedRows);
    }, []);
    const contextActions = React.useMemo(() => {
      const handleDelete = () => {
        // eslint-disable-next-line no-alert
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
          setToggleCleared(!toggleCleared);
          setData(differenceBy(data, selectedRows, 'title'));
        }
      };
    
      return <Button key="delete" onClick={handleDelete} style={{
        backgroundColor: 'red'
      }} icon>
                  Delete
              </Button>;
    }, [data, selectedRows, toggleCleared]);
    return <DataTable title="Desserts" columns={columns} data={data} selectableRows contextActions={contextActions} onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleCleared} pagination />;
  }

  export default Table;