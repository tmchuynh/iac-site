"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";

export function ContactSection14() {
  const router = useRouter();

  const handleClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    const button = event.currentTarget;
    if ( button.classList.contains( "bg-secondary" ) ) {
      button.classList.remove( "bg-secondary", "text-secondary-foreground" );
    } else {
      button.classList.add( "bg-secondary", "text-secondary-foreground" );
    }
  };

  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto">
        <h1
          className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-secondary font-extrabold text-center"
        >
          Contact Us
        </h1>
        <div className="text-sm leading-relaxed text-pretty mb-4">
          <p>Thank you for getting in touch with us! Your message is important to us, and we appreciate the time you've taken to reach out. We strive to provide the best possible service to our valued partners and families, and your inquiries contribute to making that happen.</p>
          <hr className="my-1 invisible" />
          <p> Please note that our team is actively reviewing your message, and we will make every effort to respond as promptly as possible. Your patience is highly appreciated as we work to address your questions, concerns, or feedback.</p>
          <hr className="my-1 invisible" />
          <p>If your matter requires immediate assistance, feel free to contact our office during business hours. <br />
            Office number:
            <Button
              variant="link"
              onClick={() => router.push( 'tel:7145090069' )}
              className="p-1"
            >
              (714) 509-0069
            </Button>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src="/images/classroom-2.jpg"
            alt="map"
            className="w-full h-full object-cover object-center"
          />
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-2xl"
          >
            <Label
              className="text-left !font-semibold"
            >
              Select Option(s) for Business Engagement
            </Label>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="w-full" type="button" onClick={handleClick}>
                General inquiry
              </Button>
              <Button variant="outline" className="w-full" type="button" onClick={handleClick}>
                Product Support
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label
                  className="mb-2 text-left font-medium"
                >
                  First Name
                </Label>
                <Input
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                />
              </div>
              <div>
                <Label
                  className="mb-2 text-left font-medium"
                >
                  Last Name
                </Label>
                <Input
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                />
              </div>
            </div>
            <div>
              <Label
                className="mb-2 text-left font-medium"
              >
                Your Email
              </Label>
              <Input
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
              />
            </div>
            <div>
              <Label
                className="mb-2 text-left font-medium"
              >
                Your Message
              </Label>
              <Textarea
                rows={6}
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
              />
            </div>
            <Button className="w-full" type="submit">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection14;