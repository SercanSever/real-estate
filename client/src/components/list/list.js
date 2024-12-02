import "./list.scss";
import { listData } from "../../lib/dummy-data";
import Card from "../card/card.js";

import React from "react";

function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.index} item={item}></Card>
      ))}
    </div>
  );
}

export default List;
