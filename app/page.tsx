import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <div className="h-screen flex items-center justify-center"><Button className="text-custom-color" size="lg"><CirclePlus/> Click me</Button></div>
  );
}
