export const animalsArray = [
    { src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg", alt: "IMG_20251224_125645", description: "Image Uploaded - 24 Dec 2025" },
    { src: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg", alt: "IMG_20251224_125746", description: "Image Uploaded - 24 Dec 2025" },
    { src: "https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg", alt: "IMG_20251224_125847", description: "Image Uploaded - 24 Dec 2025" },
    { src: "https://images.pexels.com/photos/4232396/pexels-photo-4232396.jpeg", alt: "IMG_20251225_125948", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/4383759/pexels-photo-4383759.jpeg", alt: "IMG_20251225_130049", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg", alt: "IMG_20251225_130150", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/60588/meerkat-animal-wild-wildlife-60588.jpeg", alt: "IMG_20251226_130251", description: "Image Uploaded - 26 Dec 2025" },
    { src: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg", alt: "IMG_20251226_130352", description: "Image Uploaded - 26 Dec 2025" },
    { src: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg", alt: "IMG_20251226_130453", description: "Image Uploaded - 26 Dec 2025" }
];
animalsArray.sort(() => Math.random() - 0.5);

export const carsArray = [
    { src: "https://images.pexels.com/photos/30112300/pexels-photo-30112300.jpeg", alt: "IMG_20251222_130554", description: "Image Uploaded - 22 Dec 2025" },
    { src: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg", alt: "IMG_20251222_130655", description: "Image Uploaded - 22 Dec 2025" },
    { src: "https://images.pexels.com/photos/14741507/pexels-photo-14741507.jpeg", alt: "IMG_20251222_130756", description: "Image Uploaded - 22 Dec 2025" },
    { src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg", alt: "IMG_20251225_130857", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg", alt: "IMG_20251225_130958", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/17590508/pexels-photo-17590508.jpeg", alt: "IMG_20251225_131059", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg", alt: "IMG_20251227_131160", description: "Image Uploaded - 27 Dec 2025" },
    { src: "https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg", alt: "IMG_20251227_131261", description: "Image Uploaded - 27 Dec 2025" },
    { src: "https://images.pexels.com/photos/4096527/pexels-photo-4096527.jpeg", alt: "IMG_20251227_131362", description: "Image Uploaded - 27 Dec 2025" }
];
carsArray.sort(() => Math.random() - 0.5);

export const childrenArray = [
    { src: "https://images.pexels.com/photos/24551647/pexels-photo-24551647.jpeg", alt: "IMG_20251225_131463", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/27903954/pexels-photo-27903954.jpeg", alt: "IMG_20251225_131564", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/4757280/pexels-photo-4757280.jpeg", alt: "IMG_20251225_131665", description: "Image Uploaded - 25 Dec 2025" },
    { src: "https://images.pexels.com/photos/5856149/pexels-photo-5856149.jpeg", alt: "IMG_20251226_131766", description: "Image Uploaded - 26 Dec 2025" },
    { src: "https://images.pexels.com/photos/13356489/pexels-photo-13356489.jpeg", alt: "IMG_20251226_131867", description: "Image Uploaded - 26 Dec 2025" },
    { src: "https://images.pexels.com/photos/7820624/pexels-photo-7820624.jpeg", alt: "IMG_20251226_131968", description: "Image Uploaded - 26 Dec 2025" },
    { src: "https://images.pexels.com/photos/13939970/pexels-photo-13939970.jpeg", alt: "IMG_20251228_132069", description: "Image Uploaded - 28 Dec 2025" },
    { src: "https://images.pexels.com/photos/783941/pexels-photo-783941.jpeg", alt: "IMG_20251228_132170", description: "Image Uploaded - 28 Dec 2025" },
    { src: "https://images.pexels.com/photos/415242/pexels-photo-415242.jpeg", alt: "IMG_20251228_132271", description: "Image Uploaded - 28 Dec 2025" }
];
childrenArray.sort(() => Math.random() - 0.5);

const shuffledArray = [];
shuffledArray.push(...carsArray);
shuffledArray.push(...animalsArray);
shuffledArray.push(...childrenArray);
shuffledArray.sort(() => Math.random() - 0.5);

export const homeArray = shuffledArray.filter((image, index) => index < 15);

export const galleryArray = [
    { album: "Animals", images: animalsArray, thumbnail: animalsArray[3].src },
    { album: "Cars", images: carsArray, thumbnail: carsArray[3].src },
    { album: "Children", images: childrenArray, thumbnail: childrenArray[3].src },
    { album: "Animals", images: animalsArray, thumbnail: animalsArray[7].src },
    { album: "Cars", images: carsArray, thumbnail: carsArray[7].src },
    { album: "Kids", images: childrenArray, thumbnail: childrenArray[7].src }
];