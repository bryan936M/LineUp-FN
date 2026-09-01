"use client"

import { Button } from "@/app/components/ui/button";
import { backendApi } from "./config/axios";

export default function Home() {
  const handleLogin = async (): Promise<void> => {
    // const response = await backendApi.get("/auth/google");
    window.location.replace('http://localhost:3001/api/v1/auth/google')
    // console.log(response.data);
  };
  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
