import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { TestPageQuery } from "./__generated__/TestPageQuery.graphql";
import { Suspense, useState } from "react";
import CustomModal from "../../components/CustomModal";

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

  const [isOpen, setIsOpen] = useState(true);

  return (
    <Suspense>
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
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Suspense>
  );
};

export default TestPage;
