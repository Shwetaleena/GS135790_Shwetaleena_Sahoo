import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addStore, deleteStore, updateStore } from "../redux/storeSlice";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useEffect, useState } from "react";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { IStore } from "../utils/interface/Istore";
import { DeleteOutline } from "@mui/icons-material";

ModuleRegistry.registerModules([AllCommunityModule]);
const StoreTable: React.FC = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state: RootState) => state.stores.stores);

  const [rowData,setRowData]=useState<IStore[]>([]);

  useEffect(()=>{
      setRowData(stores)
      console.log(rowData);
},[stores])

  const updateStoreData = useCallback(
    (params: any) => {
      if (params.newValue === params.oldValue) return false;    
      const updatedRow = { ...params.data, [params.colDef.field]: params.newValue };
      dispatch(updateStore(updatedRow));

      return true;
    },
    [dispatch]
  );

  const colDefs: ColDef[] = [
    {
      headerName: "",
      editable: false,
      filter: false,
      field: "button",
      cellRenderer: (params: any) => (
        <>
          <button
            onClick={() => dispatch(deleteStore(params.data.id))}
            style={{
              backgroundColor: "white",
              border: "none",
              marginTop: 5,
            }}>
            <DeleteOutline />
          </button>
        </>
      ),
    },
    { headerName: "S.No", field: "id", editable: false ,filter:true,},
    {
      headerName: "Store",
      field: "store",
      editable: true,
      filter: true,
      valueSetter: updateStoreData,
    },
    {
      headerName: "City",
      field: "city",
      editable: true,
      filter: true,
      valueSetter: updateStoreData,
    },
    {
      headerName: "State",
      field: "state",
      editable: true,
      filter: true,
      valueSetter: updateStoreData,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: "82vh" ,width:"85vw"}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={{ flex: 1, minWidth: 100, editable: true }}
        stopEditingWhenCellsLoseFocus={true}
        singleClickEdit={true}
      />
      <button
        style={{
          marginTop: "10px",
          padding: "15px 20px",
          backgroundColor: "orange",
          color: "black",
          border: "none",
          cursor: "pointer",
          display: "block",
          borderRadius:"10px"
        }}
        onClick={() =>{
          const newId = stores.length > 0 ? Math.max(...stores.map((s) => s.id)) + 1 : 1;
          dispatch(
            addStore({
              id: newId,
              store: "",
              city: "",
              state: "",
            })
          )
        }}>
        NEW STORE
      </button>
    </div>
  );
};

export default StoreTable;

