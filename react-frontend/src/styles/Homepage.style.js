import styled from "styled-components";

export const HeaderContianer = styled.div`
  width: auto;
  height: ${(props) => props.hg};
  padding: 5rem;
  padding-bottom: ${(props) => props.pb};
`;

export const Text = styled.h1`
  color: ${(props) => props.color};
  text-align: start;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  grid-gap: ${(props) => props.gap};
`;

export const GridProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  grid-gap: ${(props) => props.gap};
`;

export const Image = styled.img`
  width: 100%;
  height: ${(props) => props.h};
  border-radius: 10px;
  object-fit: cover;
`;

export const Container = styled.div`
  width: auto;
  height: auto;
  text-align: ${(props) => props.textAlign};
  position: relative;
  margin: ${(props) => props.margin};
  padding-left: ${(props) => props.pd};
  padding-top: ${(props) => props.pt};
  align-items: center;
  align-self: center;
`;

export const Paragraph = styled.p`
  color: #fff;
  text-align: start;
  padding-top:.5rem;
  font-size: 1rem;
`;

export const Body = styled.div`
  height: ${(props) => props.height};
  background-color: #14141f;
  font-family: "Prompt";
`;

