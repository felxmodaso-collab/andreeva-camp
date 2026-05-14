export const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BP}${p.startsWith("/") ? p : `/${p}`}`;
