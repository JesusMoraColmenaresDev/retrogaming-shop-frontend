
import { Globe } from "lucide-react";
import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

interface CountrySelectProps {
    value: string | undefined;
    onChange: (value: string) => void;
    error?: any;
}

export default function CountrySelect({ value, onChange, error }: CountrySelectProps) {
    const options = useMemo(() => countryList().getData(), []);

    return (
        <div className="flex flex-col gap-1 mb-4">
            <div className="flex items-center gap-2">
                <span className="text-gray-500">
                    <Globe />
                </span>
                <div className="w-full">
                    <Select
                        options={options}
                        value={options.find(option => option.value === value)}
                        onChange={option => onChange(option?.value || "")}
                        placeholder="Selecciona un país"
                        classNamePrefix="country-select"
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                backgroundColor: "transparent",
                                border: 0,
                                color: "#6b7280",
                                fontWeight: "bold",
                                boxShadow: "none",
                                minHeight: "40px",
                            }),
                            singleValue: (provided) => ({
                                ...provided,
                                color: "#6b7280",
                            }),
                            placeholder: (provided) => ({
                                ...provided,
                                color: "#6b7280",
                            }),
                            menu: (provided) => ({
                                ...provided,
                                backgroundColor: "#191022",
                                color: "#6b7280",
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isFocused ? "#7f13ec22" : "transparent",
                                color: "#6b7280",
                            }),
                        }}
                    />
                </div>
            </div>
            {error && (
                <span className="text-red-500 text-xs p-2">
                    El campo País no puede ir vacío
                </span>
            )}
        </div>
    );
}