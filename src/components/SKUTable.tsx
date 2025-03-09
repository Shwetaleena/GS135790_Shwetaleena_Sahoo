import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addSku, deleteSku, updateSku } from "../redux/SKUSlice";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useEffect, useState } from "react";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { DeleteOutline } from "@mui/icons-material";
import { ISKU } from "../utils/interface/Isku";

ModuleRegistry.registerModules([AllCommunityModule]);
const SKUTable: React.FC = () => {
  const dispatch = useDispatch();
  const skus = useSelector((state: RootState) => state.skus.SKU);

  const [rowData, setRowData] = useState<ISKU[]>([]);

  useEffect(() => {
    setRowData(skus);
    console.log(rowData);
  }, [skus]);

  const updateSkuData = useCallback(
    (params: any) => {
      if (params.newValue === params.oldValue) return false;
      const updatedRow = {
        ...params.data,
        [params.colDef.field]: params.newValue,
      };
      dispatch(updateSku(updatedRow));

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
            onClick={() => dispatch(deleteSku(params.data.id))}
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
    {
      headerName: "SKU",
      field: "sku",
      editable: true,
      filter: true,
      valueSetter: updateSkuData,
    },
    {
      headerName: "Price",
      field: "price",
      editable: true,
      filter: true,
      valueSetter: updateSkuData,
    },
    {
      headerName: "Cost",
      field: "cost",
      editable: true,
      filter: true,
      valueSetter: updateSkuData,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: "82vh", width: "85vw" }}>
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
          borderRadius: "10px",
        }}
        onClick={() => {
          const newId =
            skus.length > 0 ? Math.max(...skus.map((s) => s.id)) + 1 : 1;
          dispatch(
            addSku({
            id: newId,
            sku: "",
            price: "",
            cost: ""
            })
          );
        }}>
        NEW SKU
      </button>
    </div>
  );
};

export default SKUTable;
