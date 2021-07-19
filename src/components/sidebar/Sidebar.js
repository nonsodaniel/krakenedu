import React from "react";
import { Link } from "react-router-dom";
import { roadmaps } from "../../util/db";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrap">
        <div className="top">
          <h5 className="text__1">Frontend Mentor</h5>
          <h6 className="text__2"> Feedback Board</h6>
        </div>
        <div className="tags-wrap">
          <span className="tag active">All</span>
          <span className="tag">UI</span>
          <span className="tag">UX</span>
          <span className="tag">Enhancement</span>
          <span className="tag">Bug</span>
          <span className="tag">Fixes</span>
        </div>
        <div className="roadmap-wrap">
          <div className="header">
            <h6 className="text__left">Roadmap</h6>
            <Link to="#" className="text__right">
              View
            </Link>
          </div>

          {roadmaps.map((rmap) => {
            let { id, status, color, count } = rmap;
            return (
              <div className="details" key={id}>
                <div className="rounded" style={{ background: color }}></div>
                <h6 className="text__left">{status}</h6>
                <h6 className="text__right">{count}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
