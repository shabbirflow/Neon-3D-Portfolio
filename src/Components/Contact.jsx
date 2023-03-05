import React, { useState, useRef } from "react";
import styled from "styled-components";
import MapChart from "../MapChart";
import emailjs from "@emailjs/browser";

const isEmpty = (input) => {
  return input.trim() === "" ? true : false;
};

const isEmail = (input) => {
  return input.trim().includes("@") ? true : false;
};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  justify-content: space-between;
  display: flex;
  gap: 50px;
  font-family: "Karla", sans-serif;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Left = styled.div`
  flex: 1;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    height: 50vh;
    /* flex-direction: column-reverse; */
    justify-content: center;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 30px;
  gap: 15px;
  @media only screen and (max-width: 1000px) {
    margin: 0 10px;
    height: 40vh;
    width: 400px;
    overflow: auto;
    /* align-self: center;
    justify-self: center; */
  }
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 5px;
  border: none;
  font-family: "Karla", sans-serif;
  font-size: 15px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 5px;
  border: none;
  font-family: "Karla", sans-serif;
  font-size: 15px;

  @media only screen and (max-width: 1000px) {
    height: 10vh;
  }
`;

const Button = styled.button`
  padding: 25px;
  border-radius: 5px;
  border: none;
  font-family: "Karla", sans-serif;
  font-size: 15px;
  background-color: #ed50f1;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    scale: 1.1;
    color: yellow;
  }
`;

const Right = styled.div`
  flex: 1;
  /* background-color: blue; */
  @media only screen and (max-width: 1000px) {
    height: 50vh;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 1px;
  padding: 0;
`;

const Contact = () => {
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [success, setSuccess] = useState(0);
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const message = inputMessage.current.value;
    setNameValid(!isEmpty(name));
    setEmailValid(isEmail(email));
    setMessageValid(!isEmpty(message));
    let formValid = !isEmpty(name) && isEmail(email) && !isEmpty(message);
    if (!formValid) {
      return;
    }
    emailjs
      .sendForm(
        "service_web6rnm",
        "template_6jjwzb3",
        form.current,
        "ofuRsrsC2woVM7-ML"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(1);
        },
        (error) => {
          console.log(error.text);
          setSuccess(2);
        }
      );

    inputEmail.current.value = "";
    inputName.current.value = "";
    inputMessage.current.value = "";
  };

  return (
    <Section id = 'contact'>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit} ref={form}>
            <Title> Contact me </Title>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              ref={inputName}
              name="name"
            />
            {!nameValid && <ErrorMessage>Name cannot be empty</ErrorMessage>}
            <Input
              type="email"
              id="email"
              placeholder="E - mail"
              ref={inputEmail}
              name="email"
            />
            {!emailValid && <ErrorMessage>Email must contain '@'</ErrorMessage>}
            <TextArea
              id="message"
              placeholder="Enter your message"
              rows={8}
              ref={inputMessage}
              name="message"
            />
            {!messageValid && (
              <ErrorMessage>Message cannot be empty</ErrorMessage>
            )}
            <Button type="submit">Send</Button>
            {success == 1 && (
              <p>Message sent! I'll get back to you soon as I can</p>
            )}
            {success == 2 && <ErrorMessage> An error occured. </ErrorMessage>}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
