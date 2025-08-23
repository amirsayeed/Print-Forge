import Image from "next/image";
import bannerImg from "@/public/bannerImg.png"
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8">
      <div className="space-y-4 max-w-md">
        <p className="text-base">Your go-to platform for 3D printing files</p>
        <h1 className="text-3xl font-bold">Discover what’s possible with 3D printing</h1>
        <p className="text-lg">Join our community of creators and explore a vast library of user-submitted models.</p>
        <button className="btn btn-outline">Browse models</button>
      </div>
      <div>
        <Image src={bannerImg}
        alt="banner image"
        width={400}
        height={400}
        />
      </div>
    </div>
  )
}