export default function appHeader(appName) {
  const header = document.createElement("header");
  const title = document.createElement("h1");

  title.innerText = appName;
  header.appendChild(title);

  return header;
}
