import { getDb } from "../db.js";

export async function getCampuses() {
  const db = await getDb();
  return db.all("SELECT * from campus");
}
