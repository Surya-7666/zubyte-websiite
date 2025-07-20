import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Add this line

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const showAlert = (message, type = "success") => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 6000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://172.21.0.10:5000/api/messages/send", formData);
      showAlert("Message sent successfully!", "success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        showAlert(err.response.data.error, "warning");
      } else {
        showAlert("Failed to send message.", "error");
      }
    } finally {
      setLoading(false);
    }
  };





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
          <form onSubmit={handleSubmit}>
            {alert.message && (
              <StyledAlert className={alert.type}>
                {alert.message}
              </StyledAlert>
            )}

            <Field>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label>Name</label>
            </Field>
            <Field>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </Field>
            <Field>
              <textarea
                rows="5"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <label>Message</label>
            </Field>
            <SendButton type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </SendButton>

          </form>
        </FormPanel>
      </Container>
    </Wrapper>
  );
}
const StyledAlert = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 500;
  z-index: 9999;
  animation: fadeInOut 4s ease forwards;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  color: white;
  font-size: 1rem;

  &.success {
    background-color: #4caf50;
  }

  &.error {
    background-color: #f44336;
  }

  &.warning {
    background-color: #ff9800;
  }

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(20px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(20px); }
  }

  @media (max-width: 480px) {
    top: auto;
    bottom: 50px; /* approx. above the submit button */
    left: 15%;
    transform: translateX(50%);
    padding: 8px 14px;
    font-size: 0.75rem;
    border-radius: 8px;
    max-width: 70%;
    text-align: center;
  }
`;



const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 10px;
  display: inline-block;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


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
