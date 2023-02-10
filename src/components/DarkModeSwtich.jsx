"use client";
import React from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
export default function DarkModeSwtich() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted , setMounted]= useState(false);

  useEffect(()=> setMounted(true),[])
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted && (currentTheme === "dark" ? (
        <BsFillSunFill onClick={() => setTheme("light")} />
      ) : (
        <BsMoonStarsFill onClick={() => setTheme("dark")} />
      ))}
    </div>
  );
}
