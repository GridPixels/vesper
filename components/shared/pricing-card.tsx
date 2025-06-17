import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PricingItemType from "@/types/PriceItem";

export default function PricingCard({ data }: { data: PricingItemType }) {
  const { title, description, price, url, features, ctaText, id } = data;

  return (
    <div className={`rounded-lg shadow-md`}>
      <div
        className={`flex w-full flex-col rounded-md p-5 md:p-10 ${
          id === 2 && "border-primar border"
        } bg-white`}
      >
        <h5 className="pb-4 text-2xl font-medium">{title}</h5>
        <p>{description}</p>

        <div className="flex py-10">
          <span className={`text-2xl ${id === 3 && "invisible"}`}>$</span>
          <span className={`text-5xl font-medium ${id === 3 && "invisible"}`}>
            {id !== 4 && price}
          </span>
        </div>

        {/* <Button className="mb-10 h-11 bg-primary">{ctaText}</Button> */}

        {id !== 2 ? (
          <Button asChild className="mb-10 h-11 bg-primary hover:bg-primary/95">
            <Link href={url}>{ctaText}</Link>
          </Button>
        ) : (
          <Button
            asChild
            className="mb-10 h-11 bg-gradient-to-r from-[#00B09B] to-[#96C93D] duration-500 hover:opacity-95"
          >
            <Link href={url}>{ctaText}</Link>
          </Button>
        )}

        <div className="">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2 py-4 text-gray-500">
              <CircleCheck className="text-gray-500" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
