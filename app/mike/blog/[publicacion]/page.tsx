"use client";

import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";

export default function PublicacionPage() {
  const [data, setData] = useState({
    msg: "Cargando...",
    data: {
      bebida: "",
      platoFuerte: "",
    },
  });

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/meal");
      const fetchedData = await response.json();

      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      Esta es la página de: {params.publicacion}
      <p>{data.msg}</p>
    </div>
  );
}
