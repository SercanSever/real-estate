import React from "react";
import "./list-page.scss";
import { listData } from "../../lib/dummy-data.js";
import Filter from "../../components/filter/filter.js";
import Card from "../../components/card/card.js";
import Map from "../../components/map/map.js";

function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
