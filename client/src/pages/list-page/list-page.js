import React from "react";
import "./list-page.scss";
import { listData } from "../../lib/dummy-data.js";
import Filter from "../../components/filter/filter.js";
import Card from "../../components/card/card.js";

function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
}

export default ListPage;
