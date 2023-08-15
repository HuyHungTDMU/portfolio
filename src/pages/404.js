import Image from "next/image";
import img404 from "../../public/images/projects/404.png";

export default function Custom404() {
  return (
    <div className="w-full h-auto flex items-center justify-center p-12 pt-32">
      <Image src={img404} alt="404" className="rounded-3xl max-w-lg h-auto" />
    </div>
  );
}
