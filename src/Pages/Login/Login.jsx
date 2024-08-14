import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Spinner,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { FaEnvelope, FaKey } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Login.css";
// import useIsPhoneSize from "../../Utills/useIsPhoneSize";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  // const isMobile = useIsPhoneSize();

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      console.log(form);
      setLoading(false);
      login();
      navigate("/");
    } else {
      Object.values(newErrors).forEach((error) => {
        // Handle errors
      });
    }
  };

  const validateForm = (formData) => {
    let newErrors = {};
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Email or Phone must be filled";
    }
    if (!formData.password || !formData.password.trim()) {
      newErrors.password = "Password must be filled";
    }
    return newErrors;
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="login">
        <div className="login-page">
          <div className="login-description">
            <h2>BRAIN BOX</h2>
            <p>
              Brain Box helps you connect, share, and earn <br /> by liking and
              posting videos with the people in your life.
            </p>
          </div>

          <div className="rounded-3 shadow p-3 login-form">
            <div className="login-title">
              <img src={logo} alt="logo" />
            </div>
            <div className="mb-3">
              <FormGroup>
                <Label for="email">Email</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <Input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    value={form.email}
                    type="email"
                    className="form-control"
                    invalid={!!errors.email}
                    placeholder="Email address or phone number"
                  />
                </div>
                {errors.email && (
                  <FormFeedback>
                    <span style={{ color: "red" }}>{errors.email}</span>
                  </FormFeedback>
                )}
              </FormGroup>
            </div>

            <div className="mb-3">
              <FormGroup>
                <Label for="password">Password</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaKey />
                  </span>
                  <Input
                    onChange={handleChange}
                    id="password"
                    name="password"
                    value={form.password}
                    type="password"
                    className="form-control"
                    invalid={!!errors.password}
                    placeholder="Password"
                  />
                </div>
                {errors.password && (
                  <FormFeedback>
                    <span style={{ color: "red" }}>{errors.password}</span>
                  </FormFeedback>
                )}
              </FormGroup>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <FormGroup check className="custom-checkbox">
                <Input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                />
                <Label check for="rememberMe" className="mb-0">
                  Remember me
                </Label>
              </FormGroup>
              <Link to="#" className="text-dark">
                Forget password?
              </Link>
            </div>

            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-100 mb-4 submit p-2"
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "LogIn"}
            </Button>
            <div className="signup">
              Don't have an account?
              <button type="button" onClick={toggle}>
                <b>Create account</b>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <div className="signup-modal">
          <ModalHeader toggle={toggle}>
            <h2>BRAIN BOX</h2>
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      onChange={handleChange}
                      id="firstName"
                      name="firstName"
                      value={form.firstName || ""}
                      type="text"
                      className="form-control"
                      invalid={!!errors.firstName}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <FormFeedback>
                        <span style={{ color: "red" }}>{errors.firstName}</span>
                      </FormFeedback>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      onChange={handleChange}
                      id="lastName"
                      name="lastName"
                      value={form.lastName || ""}
                      type="text"
                      className="form-control"
                      invalid={!!errors.lastName}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <FormFeedback>
                        <span style={{ color: "red" }}>{errors.lastName}</span>
                      </FormFeedback>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Input
                  onChange={handleChange}
                  id="signupMail"
                  name="signupMail"
                  value={form.signupMail || ""}
                  type="email"
                  className="form-control"
                  invalid={!!errors.signupMail}
                  placeholder="Email address or phone number"
                />
                {errors.signupMail && (
                  <FormFeedback>
                    <span style={{ color: "red" }}>{errors.signupMail}</span>
                  </FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={handleChange}
                  id="signupDob"
                  name="signupDob"
                  value={form.signupDob || ""}
                  type="date"
                  className="form-control"
                  invalid={!!errors.signupDob}
                  placeholder="Email address or phone number"
                />
                {errors.signupDob && (
                  <FormFeedback>
                    <span style={{ color: "red" }}>{errors.signupDob}</span>
                  </FormFeedback>
                )}
              </FormGroup>

              <FormGroup>
                <Input
                  onChange={handleChange}
                  id="userName"
                  name="userName"
                  value={form.userName || ""}
                  type="text"
                  className="form-control"
                  invalid={!!errors.userName}
                  placeholder="User Name"
                />
                {errors.userName && (
                  <FormFeedback>
                    <span style={{ color: "red" }}>{errors.userName}</span>
                  </FormFeedback>
                )}
              </FormGroup>

              <FormGroup>
                <Input
                  onChange={handleChange}
                  id="signupPassword"
                  name="signupPassword"
                  value={form.signupPassword || ""}
                  type="password"
                  className="form-control"
                  invalid={!!errors.signupPassword}
                  placeholder="New Password"
                />
                {errors.signupPassword && (
                  <FormFeedback>
                    <span style={{ color: "red" }}>
                      {errors.signupPassword}
                    </span>
                  </FormFeedback>
                )}
              </FormGroup>

              <Button
                type="submit"
                className="w-100 mb-1 submit p-2"
                disabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Signup"}
              </Button>
            </Form>
          </ModalBody>
          <div className="singup-title">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </Modal>
    </div>
  );
}
