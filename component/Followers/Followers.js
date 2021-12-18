import React from "react";
import FollowersList from "../FollowersList/FollowersList";
import Header from "../Header/Header";

export default function Followers() {
  return (
    <div className="followers">
      <Header title="Followers" />
      <FollowersList />
    </div>
  );
}
