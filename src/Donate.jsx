import React, { useState } from 'react';


function Donate() {
  const [amount, setAmount] = useState("");

  return (
    <div>
    
      <div
        style={{
          position: "relative",
          backgroundImage: "url('https://t3.ftcdn.net/jpg/01/95/24/34/360_F_195243450_rX0QdeORWyWLuliJaTP4gNMneBIK3DIl.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "6rem 1rem 2rem",
          textAlign: "center",
          height:"21rem"
        }}
      >
        <h2 className='mt-5'
          style={{
            fontFamily: "Lora",
            color: "#ff6b6b",
            fontSize: "2.5rem",
            fontWeight: "700",
            margin: "0 auto",
            
          }}
        >
          “Give a hand, lift a future.”
        </h2>
      </div>

     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "2rem",
            borderRadius: "1rem",
            width: "100%",
            maxWidth: "600px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            backdropFilter: "blur(5px)",
          }}
        >
          <h3 style={{ fontFamily: "Lora", marginBottom: "1.5rem" }}>
            Select Donation Amount
          </h3>

          {/* Amount Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <button
              onClick={() => setAmount(500)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: amount === 500 ? "#ffb703" : "#ffd966",
                color: amount === 500 ? "#fff" : "#333",
                fontFamily: "Inter",
                fontWeight: "600",
                cursor: "pointer",
                minWidth: "100px",
              }}
            >
              ₹500
            </button>

            <button
              onClick={() => setAmount(1000)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: amount === 1000 ? "#ffb703" : "#ffd966",
                color: amount === 1000 ? "#fff" : "#333",
                fontFamily: "Inter",
                fontWeight: "600",
                cursor: "pointer",
                minWidth: "100px",
              }}
            >
              ₹1000
            </button>

            <button
              onClick={() => setAmount(2000)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: amount === 2000 ? "#ffb703" : "#ffd966",
                color: amount === 2000 ? "#fff" : "#333",
                fontFamily: "Inter",
                fontWeight: "600",
                minWidth: "100px",
              }}
            >
              ₹2000
            </button>

            <input
              type="number"
              placeholder="Custom"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontFamily: "Inter",
                minWidth: "100px",
              }}
            />
          </div>

          <p style={{ marginTop: "1rem", fontFamily: "Inter", color: "#382c2c" }}>
            *₹500 feeds 5 children for a day
          </p>

          {/* Donate Button */}
          <button
            className="btn"
            style={{
              width: "100%",
              padding: "10px 0",
              borderRadius: "8px",
              backgroundColor: "#0b0336ff",
              color: "#fff",
              fontFamily: "Lora",
              marginTop: "1rem",
              fontSize: "1.1rem",
            }}
          >
            Donate
          </button>
        </div>
      </div>

     
    </div>
  );
}

export default Donate;
