"use client";
import { Button } from "@/components/ui/button";
// import Header from "@/app/components/Header";

const GOOGLE_AUTH_URL = 'http://localhost:3001/api/v1/auth/google';

export default function Home() {

  const handleLogin = async (): Promise<void> => {
    window.location.replace(GOOGLE_AUTH_URL);
  };

  return (
    <div>
      {/* <Header /> */}
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
