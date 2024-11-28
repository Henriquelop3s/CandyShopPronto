import { Button } from "@/components/ui/button"

export default function Background() {
  return (
    <div className="relative h-full w-full">
      <div className="w-[500px] h-[500px] rounded-full bg-blue-500 absolute top-0 left-0 blur-[100px] opacity-20" />
      <div className="w-[500px] h-[500px] rounded-full bg-yellow-500 absolute top-0 right-0 blur-[100px] opacity-[0.25]" />
      <div className="w-[500px] h-[500px] rounded-full bg-purple-500 absolute top-[30vh] left-1/2 transform -translate-x-1/2 blur-[100px] opacity-20" />
    </div>
  )
}