import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  const id = data.id;

  try {
    const response = await fetch(
      `https://cours-nextjs-default-rtdb.europe-west1.firebasedatabase.app/articles/${id}.json`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Cet article n'éexiste pas");
    }

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    throw new Error(e.message);
  }
}
