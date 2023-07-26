const BASE_PATH_FORAPI = process.env.NODE_ENV === "development"?
"http://localhost:3000"
:"https//hackathone-1.vercel.app"

export default BASE_PATH_FORAPI