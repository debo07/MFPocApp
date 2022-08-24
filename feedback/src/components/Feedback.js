import React from "react";
import "../../public/feedback.css";

export const Feedback = () => {
    return (
        <div
            className="feedback-container"
            onClick={() => {
                alert("Feedback submitted!!!");
            }}>
            Feedback
        </div>
    );
};
