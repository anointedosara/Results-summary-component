"use client";
import React from "react";
import styled from "styled-components";

function Results() {
  return (
    <Wrapper>
      <h1>Your Result</h1>
      <div className="score">
        <h2>76</h2>
        <p>of 100</p>
      </div>
      <h3>Great</h3>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 50%;
  height: 100%;
  padding: 40px;
  background-image: linear-gradient(
    to bottom,
    hsl(252, 100%, 67%) 30%,
    hsl(241, 81%, 54%)
  );
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 18px;
    color: hsl(241, 100%, 89%);
    font-weight: 600;
  }
  p {
    font-size: 13px;
    color: hsl(241, 100%, 89%);
    font-weight: 500;
    margin-top: 15px;
    line-height: 1.6;
  }
  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 25px 0;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    background-image: linear-gradient(
      to bottom,
      hsla(256, 72%, 46%, 1) 50%,
      hsla(241, 72%, 46%, 0)
    );
    h2 {
      font-size: 50px;
      color: white;
    }
    p {
      margin-top: 5px;
    }
  }
  h3 {
    font-size: 22px;
    font-weight: 500;
    color: white;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 40px;
    border-radius: 0 0 20px 20px;
    p {
      font-size: 15px;
    }
  }
`;

export default Results;
