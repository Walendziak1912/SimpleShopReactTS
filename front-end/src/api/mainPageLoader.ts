import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from "../constants/api";
import { GenderData } from "../types/models";

export async function mainPageLoader({
  params,
}: LoaderFunctionArgs): Promise<GenderData> {
  const gender = params.gender as string;
  const backEndPath = PATH_TO_ENDPOINT_MAPPING[gender];

  if (backEndPath) {
    const response = await fetch(`${BACK_END_URL}/${backEndPath}`);
    return await response.json();
  } else {
    throw redirect("/kobieta");
  }
}
