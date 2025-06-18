type Result<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function handleResult<T>(result: Result<T>): T | string {
  if (result.status === "success") {
    return result.data;
  } else {
    return `Error: ${result.error}`;
  }
}