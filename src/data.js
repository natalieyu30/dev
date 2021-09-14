export const jsPortfolio = {
  id: 1,
  title: "Fairwiew Valley Orchards Website",
  img: ["/assets/projects/farm-main.png", "/assets/projects/farm-about.png"],
  site: "https://fairview-valley-orchards.netlify.app/",
  github: "https://github.com/natalieyu30/parkway-orchards",
  desc: [
    "Use media query to make responsive website",
    "Navbar function",
    "CSS : grid, flexbox",
    "Modal, arccordion function - use JavaScript and addEventListen to open and close the modal or arccordion",
    "Use Netlify to deploy the site",
  ],
};

export const reactPortfolio = {
  id: 2,
  title: "React Weather App",
  img: [
    "/assets/projects/weather-toronto.png",
    "/assets/projects/weather-main.png",
  ],
  site: "https://weather-forecast-2021.netlify.app/",
  github: "https://github.com/natalieyu30/weather-app",
  desc: [
    "Responsive web/App",
    "Connect to an external API to fetch data and display the results to the app",
    "Axios.get('https://www.metaweather.com/api/')",
    "CORS",
    "Use query for location",
    "Async functions (async/await) to make code asynchronously",
    "Axios : Send asynchronous HTTP requests to REST endpoints and perform CRUD operations",
    "moment: Install npm moment and handle date data",
  ],
};

export const nodePortfolio = {
  id: 3,
  title: "Bookshelf",
  img: [
    "/assets/projects/bookshelf-allbooks.png",
    "/assets/projects/bookshelf-add.png",
  ],
  site: "https://natdev-bookshelf.herokuapp.com/",
  github: "https://github.com/natalieyu30/bookshelf",
  desc: [
    "Use Node.js, Express to make backend",
    "Use MongoDB to store data",
    "CRUD",
    "Create : add new book",
    "Read : all books, get single book by book id",
    "Update : edit book infomation",
    "Delete : delete book by book id",
    "MVC pattern (Model, View, Controller)",
    "Ejs embedded JavaScript template as a view engine and create dynamic HTML",
    "Use Heroku to deploy the site",
  ],
};

export const mernPortfolio = {
  id: 4,
  title: "MERN Blog",
  img: ["/assets/projects/blog-main.png", "/assets/projects/blog-register.png"],
  site: "https://natdev-blog-21.herokuapp.com/",
  github: "https://github.com/natalieyu30/weather-app/tree/blog-mern",
  desc: [
    "MERN : MongoDB, Express, React, Node.js",
    "Design React Application",
    "Responsive website",
    "Set pages with react-router-dom",
    "Create REST API",
    "Hash password with bcrypt and generate salt",
    "Use axios to get and handle data",
    "Use Heroku to deploy the site",
  ],
};

export const worksData = [
  {
    id: 1,
    title: "HTML, CSS, JavaScript",
    img: "./assets/code/html.svg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, omnis.",
  },
  {
    id: 2,
    title: "Node.js, Express, Backend",
    img: "./assets/code/backend.svg",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus, similique, corporis quae maxime blanditiis perferendis labore obcaecati quaerat eligendi nemo.",
  },
  {
    id: 3,
    title: "React, Next.js",
    img: "./assets/code/react.svg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae rerum maxime aliquid ullam? Assumenda asperiores suscipit.",
  },
];
