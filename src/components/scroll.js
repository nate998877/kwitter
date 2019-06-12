import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
<InfiniteScroll
  dataLength={items.length}
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>Yay! You have seen it all</b>
    </p>
  }
 
  >
  {items}
</InfiniteScroll>