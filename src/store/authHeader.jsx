export default function authHeader() {
  //   const user = JSON.parse(localStorage.getItem("user"));
  const tokens = JSON.parse(localStorage.getItem("tokens"));

  if (tokens) {
    return { Authorization: "Bearer " + tokens };
  } else {
    return {};
  }
}
