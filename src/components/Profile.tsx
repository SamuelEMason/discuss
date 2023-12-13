'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div style={{ width: '450px', wordWrap: 'break-word' }}>
        From client: {JSON.stringify(session.data.user)}
      </div>
    );
  }
  
  return <div>From client: user is signed out</div>;
}