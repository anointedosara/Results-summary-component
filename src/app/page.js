"use client";
import Results from "@/components/Results";
import Summary from "@/components/Summary";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <Results />
        <Summary />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  .inner-wrapper {
    display: flex;
    align-items: center;
    max-width: 550px;
    width: 100%;
    background: white;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    .inner-wrapper {
      flex-direction: column;
      max-width: 400px;
      border-radius: 0;
    }
  }
`;
