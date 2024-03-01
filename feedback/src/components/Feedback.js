import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../public/feedback.css";

export const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/data"); // Replace with your actual mocked URL
                const data = await response.json();
                setFeedbackData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div
            className="feedback-container"
            onClick={() => {
                alert(
                    `Feedback submitted! (Data: ${feedbackData?.message || "No data available"})`,
                ); // Handle potential absence of data
            }}>
            {feedbackData ? "Feedback" : "feedback"}
        </div>
    );
};

export const mount = el => {
    ReactDOM.render(<Feedback />, el);
};

export default Feedback;
