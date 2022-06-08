import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'nkwwk2iw',
    dataset: 'production',
    apiVersion: '2022-06-07',
    useCdn: true,
    token: 'skNvCpeVkpwJqnfBaAAk9BgNZZoHScMZmziniXoyGYd0earMARaRPHOTCvAScutioT85FVds3bAodjlFAElhGiqmHHI8BhKja5yAJ4rkhSn5SgBVPyvURxyWAdeQgo0u8bCooTcEGKhDQlNwXzTokPSp6Te0Hjs41rYPfoat7R9XsvNTShC2'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);