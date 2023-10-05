import { Link } from "react-router-dom";
import { Api } from "../../api/url";

export const PathNotFound = () => {
  return (
    <div>
      <main
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: "7rem",
            fontWeight: "800",
            color: "#ffffff",
            letterSpacing: "widest",
          }}
        >
          404
        </h1>
        <div
          style={{
            backgroundColor: "#FF6A3D",
            padding: "0.5rem",
            fontSize: "0.875rem",
            borderRadius: "0.25rem",
            transform: "rotate(12deg)",
            position: "absolute",
          }}
        >
          Page Not Found
        </div>
        <button style={{ marginTop: "1.25rem" }}>
          <Link to={Api.Default}>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#FF6A3D",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s",
                  transformOrigin: "top left",
                }}
              ></span>
              <span
                style={{
                  display: "block",
                  padding: "0.75rem 2rem",
                  backgroundColor: "#1A2238",
                  border: "1px solid currentColor",
                  color: "white",
                }}
              >
                Go Home
              </span>
            </div>
          </Link>
        </button>
      </main>
    </div>
  );
};
