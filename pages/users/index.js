import React from "react";
import Link from "next/link";

const index = ({ users }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      <div>
        <h3>This is from users :{users.length}</h3>
        {users.map((user) => (
          <div key={user.id}>
            <h4>
              {user.name}
              <Link href={`users/${user.id}`}>
                <button>Explore</button>
              </Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
