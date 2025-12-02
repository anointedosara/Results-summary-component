"use client";
import { data } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

function Summary() {
  const [summaryData, setSummaryData] = useState(data)
  return (
    <Wrapper>
      <h1>Summary</h1>
      {summaryData.map((item, i) => (
        <div
          className="category"
          key={i}
          style={{ color: item.color, background: item.bg }}
        >
          <div>
            <Image src={item.icon} alt="" width={15} height={15} />
            <p>{item.category}</p>
          </div>
          <h2>
            <span>{item.score}</span> / 100
          </h2>
        </div>
      ))}
      <button>Continue</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
  width: 50%;
  h1 {
    font-size: 18px;
    color: hsl(224, 30%, 27%);
    margin-bottom: 15px;
  }
  .category {
    margin-top: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 15px;
    border-radius: 7px;
    div {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
      p {
        font-size: 14px;
        font-weight: 600;
      }
    }
    h2 {
      color: hsla(224, 30%, 27%, 0.5);
      font-size: 14px;
      font-weight: 600;
      span {
        color: hsl(224, 30%, 27%);
      }
    }
  }
  button {
    width: 100%;
    padding: 13px;
    margin-top: 30px;
    border-radius: 30px;
    background: hsl(224, 30%, 27%);
    color: white;
    border: none;
    outline: none;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background: hsl(241, 81%, 54%);
    }
  }
  @media (max-width: 768px) {
    padding: 30px;
    width: 100%;
    h1 {
      margin-bottom: 25px;
    }
    .category {
      margin-top: 17px;
      padding: 16px;
      div {
        p {
          font-size: 15px;
        }
      }
      h2 {
        font-size: 15px;
      }
    }
    button {
      font-size: 15px;
    }
  }
`;

export default Summary;
