import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsletterCta = () => {
  return (
    <section className="pb-20">
      <h3 className="text-lg font-semibold pb-4">Join Newsletter</h3>

      <div className="bg-gray-100 lg:p-10">
        <form className="flex gap-2 lg:px-10">
          <Input type="text" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCta;
