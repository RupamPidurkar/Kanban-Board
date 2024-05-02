import { useState } from "react";
import { Column } from "../types";
import ColumnContainer from "./ColumnContainer";
const KanBanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);
  return (
    <div className="flex items-center m-auto min-h-screen overflow-x-auto overflow-y-hidden px-10">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((col) => (
            <ColumnContainer column={col} />
          ))}
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg border border-black p-4  ring-rose-500 hover:ring-2"
        >
          Add Column
        </button>
      </div>
    </div>
  );

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
  function generateId() {
    return Math.floor(Math.random() * 10001);
  }
};

export default KanBanBoard;
