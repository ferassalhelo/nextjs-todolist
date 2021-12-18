import React from "react";

export default function Erorr() {
  return (
    <div className="text-center mt-5">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden text-secondary">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p className="fs-5 fw-bold text-uppercase">this page is not found</p>
    </div>
  );
}
