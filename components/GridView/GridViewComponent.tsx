import React from "react";
import { Table } from "reactstrap";
import PaginationWork from "../PaginationWork/PaginationWork";

interface WebRobotGridViewProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  keyField: keyof T;
  dataLimit: number;
  actions?: ActionHandler<T>;
}

// Definisce la struttura delle colonne
export interface ColumnConfig<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  render?: (row: T) => React.ReactNode;
}

export interface ActionHandler<T> {
  onDelete?: (item: T) => void;
  onEdit?: (item: T) => void;
  [key: string]: ((item: T) => void) | undefined;
}

const WebRobotGridView = <T extends object>({ data, columns, keyField, dataLimit, actions }: WebRobotGridViewProps<T>) => {
  const [currentData, setCurrentData] = React.useState<T[]>(data);

  const getPaginatedData = (paginatedData: T[]) => {
    setCurrentData(paginatedData);
  };

  return (
    <div className="grid-view">
      <Table borderless style={{ width: "100%" }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {currentData.length ? (
            currentData.map((item) => (
              <tr key={String(item[keyField])}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>
                    {typeof column.accessor === "function"
                      ? column.accessor(item)
                      : String(item[column.accessor])}
                  </td>
                ))}
                {actions && (
                  <td>
                    <div className="action_group">
                      {actions.onEdit && (
                        <button onClick={() => actions.onEdit?.(item)}>Edit</button>
                      )}
                      {actions.onDelete && (
                        <button onClick={() => actions.onDelete?.(item)}>Delete</button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} style={{ textAlign: "center" }}>
                Nessun dato disponibile
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <PaginationWork data={data} dataLimit={dataLimit} getPaginatedData={getPaginatedData} />
    </div>
  );
};

export default WebRobotGridView;
