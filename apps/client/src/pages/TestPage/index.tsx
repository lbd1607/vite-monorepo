import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { TestPageQuery } from "./__generated__/TestPageQuery.graphql";
import { Suspense, useState } from "react";
import CustomModal from "components/CustomModal";
import { CommonCustomModal } from "@repo/common/components/CommonCustomModal";
import { styled } from "styled-components";

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
      <PageHeading>Test page</PageHeading>
      <DataDisplay>
        Data:
        {data?.messages?.map((message) => (
          <MessageWrapper key={message.id}>
            <Message>ID: {message.id}</Message>
            <Message>User: {message.user}</Message>
            <Message>Content: {message.content}</Message>
          </MessageWrapper>
        ))}
      </DataDisplay>
      {/* <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* <CommonCustomModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </Suspense>
  );
};

export default TestPage;

const PageHeading = styled.h1``;
const DataDisplay = styled.div`
  display: grid;
  justify-content: center;
`;
const MessageWrapper = styled.div``;
const Message = styled.p``;
