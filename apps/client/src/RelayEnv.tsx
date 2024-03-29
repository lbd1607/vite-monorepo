import { Environment, Network, RecordSource, Store } from "relay-runtime";

const store = new Store(new RecordSource());

const network = Network.create((operation: { text: any }, variables: any) => {
  return fetch("http://localhost:7475/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store,
});

export default environment;
