export const animalsArray = [
    { src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg", alt: "Puppies" },
    { src: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg", alt: "Duckling" },
    { src: "https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg", alt: "Squirrel" },
    { src: "https://images.pexels.com/photos/4232396/pexels-photo-4232396.jpeg", alt: "Brown Dog" },
    { src: "https://images.pexels.com/photos/4383759/pexels-photo-4383759.jpeg", alt: "Cat" },
    { src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg", alt: "Rabbit" },
    { src: "https://images.pexels.com/photos/60588/meerkat-animal-wild-wildlife-60588.jpeg", alt: "Meerkat" },
    { src: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg", alt: "Elephant" },
    { src: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg", alt: "Cat" }
];
animalsArray.sort(() => Math.random() - 0.5);

export const carsArray = [
    { src: "https://images.pexels.com/photos/30112300/pexels-photo-30112300.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/33303838/pexels-photo-33303838.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/17590508/pexels-photo-17590508.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg", alt: "Car" },
    { src: "https://images.pexels.com/photos/4096527/pexels-photo-4096527.jpeg", alt: "Car" }
];
carsArray.sort(() => Math.random() - 0.5);

export const childrenArray = [
    { src: "https://images.pexels.com/photos/24551647/pexels-photo-24551647.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/27903954/pexels-photo-27903954.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/4757280/pexels-photo-4757280.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/5856149/pexels-photo-5856149.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/13356489/pexels-photo-13356489.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/7820624/pexels-photo-7820624.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/13939970/pexels-photo-13939970.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/783941/pexels-photo-783941.jpeg", alt: "Children" },
    { src: "https://images.pexels.com/photos/415242/pexels-photo-415242.jpeg", alt: "Children" }
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