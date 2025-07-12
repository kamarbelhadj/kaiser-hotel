"use client";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  return (
    <div className="w-full">
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Book Your Stay
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          {/* Check-In */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium mb-2 text-gray-700">
              Check-In
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-3xl h-11 bg-white",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-Out */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium mb-2 text-gray-700">
              Check-Out
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-3xl  h-11 bg-white",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={(date) => {
                    if (!checkIn) return date < new Date();
                    return date <= checkIn;
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Book Now Button */}
          <div className="flex flex-col justify-end sm:w-auto">
            <Link href="/paiment">
              <Button className="w-full sm:w-auto px-6 h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-3xl">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
