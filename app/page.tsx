"use client";
import { useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { backendApi } from "./lib/api";

export default function Home() {
  useEffect(() => {
    async function testApiCall() {
      const response = await backendApi.get("/");
      return response.data;
    }
    testApiCall();
  }, []);

  const handleLogin = async (): Promise<void> => {
    window.location.replace("http://localhost:3001/api/v1/auth/google");
  };

  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
