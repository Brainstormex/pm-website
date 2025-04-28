import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Image from "next/image";
import Link from "next/link";

export default function MoreInformationCard() {
  return (
    <section className="py-8">
      <div>
        {/* Section Header */}
        <SectionHeading
          title="More Information"
          textColor="text-orange"
          bgColor="bg-[#F17C0633]"
        />

        {/* Contact Text */}
        <div className="mb-8">
          <p className="text-inkBlack text-lg font-medium">
            Still feel like you need more information? We're here to help.
            Connect with anyone below to learn more information or ask to be
            contacted:
          </p>
        </div>

        {/* Contact Person */}
        <div className="flex items-center mb-6">
          <div className="mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/profile-benzina.jpg"
                alt="Benzina Noronha"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-inkBlack">
              Benzina Noronha
            </h3>
            <div className="flex items-center text-sm text-inkBlack">
              <>
                <div className="flex items-baseline self-end">
                  <div className="relative h-3 w-3 mb-1">
                    <Image src="/assets/linkedIn.svg" alt="LinkedIn" fill />
                  </div>
                </div>
                <span className="mx-2 text-inactiveGray">|</span>
              </>
              <Link
                href="mailto:benzina.noronha@peoplematters.com"
                className="text-inactiveGray"
              >
                benzina.noronha@peoplematters.com
              </Link>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-inkBlack/40 my-6"></div>
      </div>
    </section>
  );
}
