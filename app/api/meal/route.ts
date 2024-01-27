import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    msg: "Hola mundo",
    data: {
      bebida: "Leche",
      platoFuerte: "Hot cakes",
    },
  });
}
