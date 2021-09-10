import { useEffect } from "react";
import * as glide from "../glide";
import { ColumnValue } from "../glide";

async function echo(message: ColumnValue) {
  if (message.value === undefined) {
    return undefined;
  }

  return `echo ${message.value}`;
}

function Index() {
  useEffect(() => {
    glide.column(echo);
  });

  return <div>echo column</div>;
}

export default Index;
