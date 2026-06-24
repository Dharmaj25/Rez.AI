"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function ComboBox({ options = []}) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [inputValue, setInputValue] = React.useState("")
    const [items, setItems] = React.useState(options)

    const filtered = items.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
    )

    const exactMatch = items.some(
        (item) => item.label.toLowerCase() === inputValue.toLowerCase()
    )

    const handleCreate = () => {
        const newItem = {
            label: inputValue,
            value: inputValue.toLowerCase().replace(/\s+/g, "-"),
        }
        setItems((prev) => [...prev, newItem])
        setValue(newItem.value)
        setInputValue("")
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className="w-[250px] justify-between border border-gray-300 focus:border-blue-500 focus:ring-1 outline-none h-8"
                >
                    {value
                        ? items.find((item) => item.value === value)?.label
                        : "Select or type..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[250px] p-0">
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder="Search or create..."
                        value={inputValue}
                        onValueChange={setInputValue}
                    />

                    <CommandGroup className="max-h-52 overflow-auto">
                        {filtered.map((item) => (
                            <CommandItem
                                key={item.value}
                                value={item.label}
                                className={`${value === item.value && "bg-blue-100/50 hover:bg-blue-100/50"}`}
                                onSelect={() => {
                                    setValue(item.value)
                                    setInputValue("")
                                    setOpen(false)
                                }}
                            >
                                <Check className={cn("mr-2 h-4 w-4 text-blue-500",value === item.value ? "opacity-100" : "opacity-0")}
                                />
                                {item.label}
                            </CommandItem>
                        ))}

                        {inputValue && !exactMatch && (
                            <CommandItem value={inputValue} onSelect={handleCreate} >
                                <Plus className="mr-2 h-4 w-4 " />
                                Add "{inputValue}"
                            </CommandItem>
                        )}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default ComboBox