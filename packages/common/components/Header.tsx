import { styled } from "styled-components";

export function Header({ title }: { title: string }) {
  return <PageHeading id="PageHeading">{title}</PageHeading>;
}

const PageHeading = styled.h1``;
