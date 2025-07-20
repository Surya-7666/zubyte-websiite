import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <Container className="container">
        <LeftPanel>
          <h2>Let's Talk</h2>
          <p>We're just a message away. Reach out to us for collabs, queries, or just say hi !! </p>
          <ContactInfo>
            <div><strong>Email:</strong> hello@zubyte.tech</div>
            <div><strong>Phone:</strong> +91 98765 43210</div>
            <div><strong>Location:</strong> Tirunelveli, Tamilnadu</div>
          </ContactInfo>
        </LeftPanel>

        <FormPanel>
          <form>
            <Field>
              <input type="text" required />
              <label>Name</label>
            </Field>
            <Field>
              <input type="email" required />
              <label>Email</label>
            </Field>
            <Field>
              <textarea rows="5" required></textarea>
              <label>Message</label>
            </Field>
            <SendButton type="submit">Send Message</SendButton>
          </form>
        </FormPanel>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: linear-gradient(135deg, #e0e0e0,);
  padding: 80px 0;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: 40px;
  background: rgba(255,255,255,0.25);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  margin-right: 30px;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #222;
  }

  p {
    color: #444;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  div {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;
  }
`;

const FormPanel = styled.div`
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
  }
`;

const Field = styled.div`
  position: relative;
  margin-bottom: 25px;

  input,
  textarea {
    width: 100%;
    padding: 15px 10px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.6);
    outline: none;
    resize: none;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      border-color: #333;
    }
  }

  label {
    position: absolute;
    top: 12px;
    left: 14px;
    color: #777;
    font-size: 1rem;
    pointer-events: none;
    transition: 0.3s;
  }

  input:focus + label,
  input:valid + label,
  textarea:focus + label,
  textarea:valid + label {
    top: -10px;
    left: 10px;
    font-size: 0.85rem;
    background: #fff;
    padding: 0 5px;
    color: #000;
  }
`;

const SendButton = styled.button`
  padding: 14px 28px;
  font-size: 1rem;
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
`;
