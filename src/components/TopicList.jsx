import React from "react";
import { Topic } from "./Topic";

export default function TopicList({ data }) {
  return (
    <div>
      {data.map((item) => {
        return <Topic key={item._id} item={item} />;
      })}
    </div>
  );
}
