import React from "react";

function Grid() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-6 gap-4">
        <div className="row-span-6">1</div>
        <div className="row-span-3">2</div>
        <div className="row-span-3">3</div>
        <div className="col-span-2 row-span-3 col-start-2 row-start-4">4</div>
      </div>
    </>
  );
}

export default Grid;
