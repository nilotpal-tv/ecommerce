"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

import { useState } from "react";
import { cn } from "@/lib/utils";

const SearchDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const items = [
    // {
    //   value: "milk and dairies",
    //   label: "Milk and Diaries",
    // },
    {
      value: "wine and alcohol",
      label: "Wine and Alcohol",
    },
    {
      value: "clothing and beauty",
      label: "Clothing and Beauty",
    },
    {
      value: "pet foods and toy",
      label: "Pet Foods and Toy",
    },
    {
      value: "fast food",
      label: "Fast Food",
    },
    {
      value: "vegetables",
      label: "Vegetables",
    },
    {
      value: "ice cream",
      label: "Ice Cream",
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : "All Categories"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white rounded-[5px]">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandEmpty>No categories found.</CommandEmpty>
          <CommandGroup className="bg-white">
            {items.map((item) => {
              return (
                <CommandItem
                  key={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchDropdown;
