/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    images: {
        domains: [
            "res.cloudinary.com",
            "images.unsplash.com",
            "i.imgur.com",
            's13emagst.akamaized.net'
        ]
    }

}


module.exports = nextConfig
