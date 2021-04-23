import React, { FunctionComponent } from 'react';

import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from "@material-ui/x-grid-data-generator";

interface OwnProps {}

type Props = OwnProps;

const DataTable: FunctionComponent<Props> = (props) => {

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

    console.log(data)

  return (
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            {...data}
            components={{
              Toolbar: GridToolbar,
            }}
        />
      </div>
  );
};

export default DataTable;
