import React, { useState } from "react";
import { Country } from "@/types/common";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const countries: Country[] = [
  { icon: "indiaFlagSquare", name: "IN" },
  { icon: "singaporeFlagSquare", name: "SI" },
  { icon: "anzFlagSquare", name: "ANZ" },
  { icon: "uaeFlagSquare", name: "UAE" },
];
const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const getCountryIcon = (countryName: string) => {
    const country = countries.find((c) => c.name === countryName);
    return country ? country.icon : "indiaFlag";
  };

  return (
    <div className="relative w-20">
      {/* Closed dropdown state */}
      <div
        className="flex items-center justify-between bg-indigo text-white cursor-pointer p-1"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <Image
            src={`/assets/flags/${getCountryIcon(selectedCountry.name)}.svg`}
            alt={selectedCountry.name}
            width={24}
            height={16}
          />
          <span className="text-sm font-medium mx-1">
            {selectedCountry.name}
          </span>
        </div>

        <ChevronDown className="w-3 h-3" />
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute w-20 bg-indigo text-white z-10">
          {countries
            .filter((country) => country.name !== selectedCountry.name)
            .map((country) => (
              <div
                key={country.name}
                className="flex items-center p-1 hover:bg-gray-800 cursor-pointer"
                onClick={() => selectCountry(country)}
              >
                <Image
                  src={`/assets/flags/${country.icon}.svg`}
                  alt={country.name}
                  width={24}
                  height={16}
                  className="object-cover rounded-sm"
                />
                <span className="text-sm font-medium ml-1">{country.name}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
