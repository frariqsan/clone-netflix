export interface ImageInterface{
    title: string;
    src: string;
}
export interface FilmsInterface{
    section: string;
    films: ImageInterface[]
}
export interface HeroInterface{
    title: string;
    gallery: ImageInterface[]
}
export interface LinkInterface {
    text: string;
    link: string;
}
export interface NavbarInterface{
    logo: ImageInterface;
    links: LinkInterface[];
}