export function GetNotes() {
  return fetch("http://localhost:8000/api/v1/notes/").then((res) => {
    const result = res.json();
    console.log();
    return result;
  });
}
