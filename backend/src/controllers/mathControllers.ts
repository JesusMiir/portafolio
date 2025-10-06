export function addXAndY(
  x: number | string | undefined,
  y: number | string | undefined
) {
  x = Number(x);
  y = Number(y);

  if (isNaN(x) || isNaN(y))
    throw {
      status: 400,
      message: "x and y must be numbers.",
    };

  return x + y;
}
