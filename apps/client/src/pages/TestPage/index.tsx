import React from "react";
import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { TestPageQuery } from "./__generated__/TestPageQuery.graphql";

const TestPage = () => {
  const data = useLazyLoadQuery<TestPageQuery>(
    graphql`
      query TestPageQuery {
        messages {
          id
          user
          content
        }
      }
    `,
    {}
  );
  return (
    <div>
      <h1>Test page</h1>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        Data:
        {data?.messages?.map((message) => (
          <p key={message.id}>
            <p>ID: {message.id}</p>
            <p>User: {message.user}</p>
            <p>Content: {message.content}</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
