import React, { Suspense } from "react";
import "./list-page.scss";
import Filter from "../../components/filter/filter.js";
import Card from "../../components/card/card.js";
import Map from "../../components/map/map.js";
import { Await, useLoaderData } from "react-router-dom";

function ListPage() {
  // const data = listData;
  const data = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<div>Loading...</div>}>
            <Await
              resolve={data.postPromise}
              errorElement={<div>Failed to load data</div>}
            >
              {(postPromise) =>
                postPromise.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<div>Loading...</div>}>
          <Await
            resolve={data.postPromise}
            errorElement={<div>Failed to load data</div>}
          >
            {(postPromise) =>
              postPromise.data.length > 0 && <Map items={postPromise.data} />
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
