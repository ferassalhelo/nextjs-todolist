import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

// export async function getStaticProps() {
//   const { data } = await axios.get("https://randomuser.me/api/?results=5");
//   let items = data.results;

//   return {
//     props: { followers: items }
//   };
// }

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=5");
      setFollowers(data.results);
    };
    fetchFollowers();
  }, []);

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-card-${index}`}
            key={`follower-card-${index}`}
          >
            <img src={follower.picture.large} />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="todo-footer">
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
