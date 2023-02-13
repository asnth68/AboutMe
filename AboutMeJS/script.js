const myStyles =`
  h1 {
    color: white;
  }
  h2 {
    color: white;
  }
  h3 {
    color: white;
  }
  p {
    color: white;
  }
  body {
    background-color: darkslategray;
  }
  a:link {
    color: yellow;
    background-color: transparent;
    text-decoration: none;
  }
  a:visited {
    color: rgb(255, 0, 0);
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    color: #90ee90;
    background-color: transparent;
    text-decoration: none;
  }
  a:active {
    color: hsl(350, 100%, 88%);
    background-color: transparent;
    text-decoration: none;
  }
  table {
    width: 50%;
    background-color: darkblue;
  }
  td, th {
    text-align: left;
    color: white;
  }
  `;
const styleElement = document.createElement("style");
styleElement.innerHTML = myStyles;
document.head.appendChild(styleElement);

const bodyContent = `
  <h1>Alden Sneath</h1>
  <h2>From Oakland, California</h2>
  <h3>I enjoy watching films, reading, biking, and snowboarding</h3>
  <img src="snowboarding copy.jpg" width="600" height="500" alt="snowboarding view">
  <p>Some sites I enjoy are</p>
  <ul>
    <li><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
    <li><a href="https://www.npr.org/podcasts-and-shows/" target="_blank">NPR podcasts</a></li>
    <li><a href="https://earth.google.com/web/" target="_blank">Google Earth</a></li>
    <li><a href="https://www.wikipedia.org/" target="_blank">wikipedia</a></li>
  </ul>
  <p style>Courses I am taking this semester</p>
  <table>
    <tr>
      <th>Name</th>
      <th>Professor</th>
      <th>Room</th>
    </tr>
    <tr>
      <td>Data Science</td>
      <td>Nguyen, Quang</td>
      <td>C-302</td>
    </tr>
    <tr>
      <td>Intro to Computer Science</td>
      <td>Pascucci, Marco</td>
      <td>C-302</td>
    </tr>
    <tr>
      <td>Discrete Mathematics</td>
      <td>Corran, Ruth Anne</td>
      <td>PL-2</td>
    </tr>
    <tr>
      <td>Web Applications</td>
      <td>Sturman, David</td>
      <td>C-302</td>
    </tr>
  </table>
`;
document.body.innerHTML = bodyContent;

