import { FeedProps } from "../Main/Feed/Feed";

export const feedData: FeedProps[] = [
  {
    FeedTopProps: {
      city: "서울",
      nation: "한국",
      name: "JM",
      isCeleb: true,
      src: "jm.jpg",
    },
    FeedSwiperImagesProps: {
      slides: [
        { src: "korea1.jpg" },
        { src: "korea2.jpg" },
        { src: "korea3.jpg" },
      ],
    },
    FeedContentsProps: {
      name: "신지민",
      contents: "오늘 하루 마루마루",
      msg: [
        { name: "v", image: "v.png" },
        { name: "jin", image: "jin.jpg" },
      ],
    },
  },
  {
    FeedTopProps: {
      city: "후쿠오카",
      nation: "일본",
      name: "JK",
      isCeleb: true,
      src: "jk.jpg",
    },
    FeedSwiperImagesProps: {
      slides: [{ src: "japan1.jpg" }, { src: "japan2.jpg" }],
    },
    FeedContentsProps: {
      name: "마루",
      contents: "오늘 수업 존나 째고 일본으로 튐",
      msg: [{ name: "rm", image: "rm.jpg" }],
    },
  },
];
