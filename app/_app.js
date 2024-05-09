import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Noto_Sans } from "next/font/google"; // 원하는 폰트 가져와서 사용하기

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={noto.className}>
      <Component {...pageProps} />
    </main>
  );
}
