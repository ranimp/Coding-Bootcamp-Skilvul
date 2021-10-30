import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5em 1.5em;
  font-family: sans-serif;
  font-size:1.25em;
  border: 1px solid ${props => props.outline ? "lightblue" : "white"};
  background-color: ${props => props.outline ? "white" : "lightblue"};
  width: ${props => props.fullWidth? "auto" : "100%"};
  color: white;
  :hover {
    border: 1px solid ${props => props.outline ? "cornflowerblue" : "lightblue"};
    background-color: ${props => props.outline ? "lightblue" : "cornflowerblue"};
  }
  border-radius:5px;
`