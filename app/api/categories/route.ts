// /api/categories

// @ts-ignore
import { CATEGORIES } from "@/utils/categories";
// Get all categories
import {NextResponse} from "next/server";

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json(CATEGORIES, {status: 200});
} 