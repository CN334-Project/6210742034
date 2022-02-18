import styled from "styled-components";

export const HeaderContianer = styled.div`
  text-align: center;
  width: auto;
  height: ${(props) => props.hg};
  padding: 5rem;
`;

export const Text = styled.h1`
  color: ${(props) => props.color};
  text-align: start;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
`;

export const Image = styled.img`
  width: 100%;
  height: ${(props) => props.h};
  border-radius: 10px;
  object-fit: cover;
`;

export const Container = styled.div`
  padding: 1rem;
  width: auto;
  height: auto;
  text-align: ${(props) => props.textAlign};
  position: relative;
  margin: ${(props) => props.margin};
`;

export const Paragraph = styled.p`
  color: #fff;
  text-align: start;
  padding-top:.5rem;
  font-size: .9rem;
`;

export const Body = styled.div`
  height: ${(props) => props.height};
  background-color: #222222;
  font-family: "Prompt";
`;
