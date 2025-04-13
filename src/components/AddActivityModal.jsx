import React from "react";

const AddActivityModal = ({
  newActivity,
  setNewActivity,
  addActivity,
  setIsModalOpen,
}) => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: "1000",
        maxWidth: "600px",
        width: "90%",
      }}
    >
      <h3 style={{ textAlign: "center", fontSize: "26px" }}>
        Add New Activity
      </h3>

      {/* Date Input */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <label>Date</label>
        <input
          type="date"
          value={newActivity.date}
          onChange={(e) =>
            setNewActivity({ ...newActivity, date: e.target.value })
          }
          style={{
            fontSize: "22px",
            padding: "12px",
            width: "50%",
            textAlign: "center",
            display: "block",
            marginBottom: "20px",
            color: "#555",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Start, Duration, PrePost */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div>
          <label>Start</label>
          <input
            type="time"
            value={newActivity.start || getCurrentTime()}
            onChange={(e) =>
              setNewActivity({ ...newActivity, start: e.target.value })
            }
            style={{ fontSize: "18px", width: "80px", padding: "6px" }}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            step="0.1"
            value={newActivity.duration}
            onChange={(e) =>
              setNewActivity({ ...newActivity, duration: e.target.value })
            }
            style={{ fontSize: "18px", width: "80px", padding: "6px" }}
          />
        </div>
        {(newActivity.activity === "Flight" ||
          newActivity.activity === "SIM/ATD") && (
          <div>
            <label>Pre&Post</label>
            <input
              type="number"
              inputMode="decimal"
              pattern="^\d*\.?\d*$"
              value={newActivity.prePost || "0"}
              onChange={(e) =>
                setNewActivity({ ...newActivity, prePost: e.target.value })
              }
              style={{ fontSize: "18px", width: "80px", padding: "6px" }}
            />
          </div>
        )}
      </div>

      {/* Note Input */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <label>Note</label>
        <textarea
          value={newActivity.note}
          onChange={(e) =>
            setNewActivity({ ...newActivity, note: e.target.value })
          }
          style={{ width: "80%", height: "50px", fontSize: "14px" }}
        />
      </div>

      {/* Activity Selector */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <label>Activity</label>
        <select
          value={newActivity.activity}
          onChange={(e) =>
            setNewActivity({ ...newActivity, activity: e.target.value })
          }
          style={{ fontSize: "18px", padding: "6px", width: "200px" }}
        >
          <option value="Flight">Flight</option>
          <option value="SIM/ATD">SIM/ATD</option>
          <option value="Ground">Ground</option>
          <option value="Other Sched. Act.">Other Sched. Act.</option>
        </select>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          style={{
            backgroundColor: "#8B0000",
            color: "white",
            padding: "10px 20px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          Close
        </button>
        <button
          onClick={addActivity}
          style={{
            backgroundColor: "#006400",
            color: "white",
            padding: "10px 20px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddActivityModal;
