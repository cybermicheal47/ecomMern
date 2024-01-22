import styled from "styled-components";
import { Mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  ${Mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 16px 10px;
  padding: 10px;
`;

const Button = styled.button`
  border: 2px solid lightgreen;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 16px 70px;

  &:hover {
    background-color: lightgreen;
    color: inherit;
  }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Create An Account</Title>

        <Form>
          <Input placeholder=" First name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />

          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
