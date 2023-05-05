"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hadMounted, setHadMounted] = useState(false);

  useEffect(() => {
    setHadMounted(true);
  }, []);

  if (!hadMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
