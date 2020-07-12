import styled from "styled-components"
const color = "blue"

const Button = styled.button`
  color: ${props => props.letter && color};
  background: ${props => props.background};
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  padding: 1rem;
`

export default Button
