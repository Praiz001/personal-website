/** @type {import('next').NextConfig} */
const nextConfig = { 
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },


    // rewrites: [
 	//     {
 	//     	source: "/course/:course_id",
 	//     	destination: "/course/[course_id].html",
 	//     },
    // ]
}

module.exports = nextConfig
