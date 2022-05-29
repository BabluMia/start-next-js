import React from 'react';

const index = ({users}) => {
    return (
        <div>
            <h3>This is from users :{users.length}</h3>
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
      props: {users:data}, // will be passed to the page component as props
    }
  }