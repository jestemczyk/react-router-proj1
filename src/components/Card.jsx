import React from "react";
import { Link } from "react-router";

export const Card = ({ id, title, price }) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "6px",
        padding: "12px",
        width: "200px",
        backgroundColor: "#fff",
      }}
    >
      <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>{title}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>${price}</span>
        <Link to={`/cards/${id}`}>
          <button
            style={{
              padding: "6px 12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Watch
          </button>
        </Link>
      </div>
    </div>
  );
};
