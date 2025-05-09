import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import GooglePlay from "./../../public/google-play.png";
import AppStore from "./../../public/app-store.png";
import WhatsApp from "./../../public/whatsapp.webp";
import imgSection1 from "./../../public/person-1.png";
import imgSection2 from "./../../public/phone-1.png";
import imgSection3 from "./../../public/person-2.png";
import imgSection4 from "./../../public/phone-2.png";

import CommentSlider from "@/components/comment-slider";
import { LogoClouds } from "@/components/logo-clouds";
import RateCard from "@/components/rate-card";
import WhyUsCard from "@/components/why-us-card";
import HowToCard from "@/components/how-to-card";
import PaymentCard from "@/components/payment-card";
import FAQAccordion from "@/components/faq-accordion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="flex min-h-screen flex-col items-end rounded-bl-[40px] rounded-br-[40px] bg-white px-4"
      >
        <div className="container my-auto">
          <div className="flex flex-col gap-12 text-center md:flex-row md:items-center md:justify-between md:text-start">
            {/* # Col */}
            <div className="md:w-6/12">
              <h1 className="h1 font-extrabold text-primary-foreground">
                Jasa Convert Pulsa yang{" "}
                <span className="bg-gradient-to-br from-[#f48034] to-[#ff9933] bg-clip-text font-extrabold text-transparent">
                  Dipercaya Jutaan Customer
                </span>{" "}
                Sejak 2010.
              </h1>

              <p className="mt-4">
                Punya Pulsa Berlebih Tapi Nggak Dipakai? Tukar Pulsa Kamu Jadi
                Uang / Saldo eWallet hanya dalam hitungan menit di WahyuConvert!
              </p>

              <Link
                href="/convert-pulsa"
                aria-label="Convert Pulsa Sekarang!"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    className:
                      "mt-8 rounded-full bg-accent-foreground text-white",
                  })
                )}
              >
                Convert Pulsa Sekarang!
              </Link>
            </div>

            {/* # Col */}
            <div className="md:w-5/12">
              <Image
                src={imgSection1}
                alt="Image"
                loading="eager"
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Hero */}

      {/* Intro */}
      <section className="py-16 md:px-4">
        <div className="container">
          <div className="flex flex-col items-center gap-12">
            {/* # */}
            <p className="text-center text-lg font-medium text-primary-foreground max-md:mx-4 md:w-3/4">
              Kita tahu betapa bernilainya pulsa kamu. WahyuConvert membangun
              layanan tukar pulsa menjadi uang yang fair untuk semua orang.
            </p>


            {/* # */}
            <div className="mt-8 w-full">
              <CommentSlider />
            </div>

            {/* # */}
            <div className="w-full">
              <LogoClouds />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Intro */}

      {/* Rate */}
      <section id="rate">
        <div className="rounded-3xl bg-accent-foreground px-4 py-16">
          <div className="container">
            <div className="flex flex-col items-center">
              {/* # */}
              <h2 className="h2 text-center font-extrabold text-white md:w-3/4">
                Berapa Rate Convert Pulsa Hari Ini?
              </h2>

              {/* # */}
              <div className="mt-10 w-full">
                <RateCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Rate */}

      {/* Why Us */}
      <section id="why-us" className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-12">
            {/* # */}
            <h2 className="h2 text-center font-extrabold text-primary-foreground md:w-3/4">
              Kenapa Kamu Harus Convert Pulsa di WahyuConvert?
            </h2>

            {/* # */}
            <div className="grid gap-2 md:grid-cols-2 md:gap-8">
              <WhyUsCard />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Why Us */}

      {/* How To */}
      <section id="tutorial-convert" className="bg-slate-100 px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-12">
            {/* # */}
            <h2 className="h2 text-center font-extrabold text-primary-foreground md:w-3/4">
              Bagaimana Cara Mudah Convert Pulsa di WahyuConvert?
            </h2>

            {/* # */}
            <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
              {/* ## */}
              <div className="md:w-1/3">
                <Image
                  src={imgSection3}
                  alt="Image"
                  className="h-auto w-full"
                />
              </div>

              {/* ## */}
              <div className="md:w-2/3">
                <div className="grid gap-2 sm:grid-cols-2">
                  <HowToCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ How To */}

      {/* Payments */}
      <section id="payments-method" className="px-4 py-16">
        <div className="container">
          <div className="mx-auto flex flex-col items-center gap-12 md:w-3/4">
            {/* # */}
            <div className="text-center">
              <h2 className="h2 text-center font-extrabold text-primary-foreground">
                Apa Saja Pilihan Metode Pencairan di WahyuConvert?
              </h2>
              <p className="mt-4">
                Kamu bisa memilih salah satu dari beberapa metode pencairan,
                baik ke rekening bank ataupun e-wallet di bawah ini.
              </p>
            </div>

            {/* # */}
            <div className="flex w-full flex-wrap items-center justify-center gap-1 sm:gap-4">
              <PaymentCard />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Payments */}

      {/* CTA */}
      <section id="cta">
        <div className="rounded-3xl bg-accent-foreground px-4 py-16">
          <div className="container">
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-center">
              {/* # */}
              <div className="md:w-1/3">
                <Image
                  src={imgSection4}
                  alt="Image"
                  className=" h-auto w-full"
                />
              </div>

              {/* # */}
              <div className="max-md:text-center md:w-max">
                <h2 className="h2 font-extrabold text-white md:w-3/4">
                  Hubungi Kami Melalui Whatsapp Sekarang !!
                </h2>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  {/* Button */}
                  <div className="overflow-hidden rounded-lg bg-[#00B151]">
                    <Link href="/">
                      <Image
                        src={WhatsApp}
                        alt="Google Play"
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ CTA */}

      {/* FAQs */}
      <section id="faq" className="px-4 py-16">
        <div className="container">
          <div className="mx-auto flex flex-col items-center gap-10 md:w-3/5">
            {/* # */}
            <h2 className="h2 text-center font-extrabold text-primary-foreground">
              FAQ
            </h2>
            <div className="w-full">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>
      {/* ./ FAQs */}
    </>
  );
}
