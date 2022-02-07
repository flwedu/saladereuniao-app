import { dateParser } from "@/utils/dateParser";

it("Should convert an array to a valid date string", () => {
  const array = [2022, 10, 9, 14, 0, 30];
  const result = dateParser(array).toString();

  expect(result).toEqual("2022-11-10T14:00:30");
});

it("Should convert an string to a valid date array", () => {
  const text = "2022-11-10T14:00:30";
  const result = dateParser(text).toArray();
  const array = [2022, 10, 9, 14, 0, 30];

  expect(result).toEqual(array);
});
