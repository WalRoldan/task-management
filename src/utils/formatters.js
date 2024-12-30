export const formatDate = (isoDateString) => {
  if (!isoDateString) return "Invalid Date";

  return new Date(isoDateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
