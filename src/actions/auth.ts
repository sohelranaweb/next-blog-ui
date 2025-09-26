import { RegisterFormValues } from "@/types";

export const register = async (data: RegisterFormValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("User Registeration failed", await res.text());
  }
  return await res.json();
};
