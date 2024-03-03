/**
 * @generated SignedSource<<4fd066f711e697c74bcacec729522a26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TestPageQuery$variables = {};
export type TestPageQuery$data = {
  readonly messages: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
    readonly user: string;
  }> | null;
};
export type TestPageQuery = {
  response: TestPageQuery$data;
  variables: TestPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Message",
    "kind": "LinkedField",
    "name": "messages",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "49f3bafa348c71822b37d996a627c3f8",
    "id": null,
    "metadata": {},
    "name": "TestPageQuery",
    "operationKind": "query",
    "text": "query TestPageQuery {\n  messages {\n    id\n    user\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "29e96a8a8aef8a6503db5040c9ac3e94";

export default node;
