import React, { useReducer } from "react"
import styled from "styled-components"
import Button from "../Button/button"

const ACTIONS = {
  setName: "setName",
  setMessage: "setMessage",
  setEmail: "setEmail",
}

const initialState = {
  name: "",
  message: "",
  email: "",
}

const actions = {
  [ACTIONS.setName]: (state, payload) => ({ ...state, name: payload }),
  [ACTIONS.setMessage]: (state, payload) => ({ ...state, message: payload }),
  [ACTIONS.setEmail]: (state, payload) => ({ ...state, email: payload }),
}

function reducer(state, action) {
  try {
    return actions[action.type](state, action.payload)
  } catch (error) {
    throw new Error("Invalid action type")
  }
}

const Contact = ({ title, subtitle, id }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = e => {
    // e.preventDefault()
    console.log("state", state)
  }

  return (
    <ContactWrapper id="contact">
      <div className="content-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <form netlify onSubmit={handleSubmit} name="contact" netlify>
          <div className="input-area">
            <input
              onChange={({ target: { value } }) =>
                dispatch({ type: ACTIONS.setName, payload: value })
              }
              type="text"
              name="name"
              value={state.name}
              required
              autocomplete="off"
            />
            <label className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="input-area">
            <input
              onChange={({ target: { value } }) =>
                dispatch({ type: ACTIONS.setEmail, payload: value })
              }
              type="email"
              name="email"
              value={state.email}
              required
              autocomplete="off"
            />
            <label className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="input-area">
            <textarea
              onChange={({ target: { value } }) =>
                dispatch({ type: ACTIONS.setMessage, payload: value })
              }
              type="text"
              name="message"
              rows="5"
              required
              autocomplete="off"
              value={state.message}
            />
            <label className="label-name">
              <span className="content-name">Message</span>
            </label>
          </div>

          <div className="input-area button-area">
            <Button cta="Send" type="submit" />
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  padding: 100px 30px;

  .content-container {
    width: 100%;
    margin: 0 auto;

    h2 {
      text-align: left;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        text-align: center;
      }
    }
    p {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        text-align: center;
      }
    }

    form {
      position: relative;
      overflow: hidden;

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
          margin-bottom: 0;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #0b132e;
        color: #fff;
        text-transform: uppercase;
        position: relative;
        box-sizing: border-box;
        outline: none;

        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }
      }

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, #f441a5, #03a9f4);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default Contact
