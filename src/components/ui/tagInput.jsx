"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import { Input } from "@/components/ui/input"

function TagInput({ suggestions = [] }) {
  const [tags, setTags] = React.useState([])
  const [input, setInput] = React.useState("")
  const [focused, setFocused] = React.useState(false)

  const filtered = suggestions.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase()) &&
      !tags.includes(item)
  )

  const addTag = (tag) => {
    if (!tag.trim()) return
    if (tags.includes(tag)) return

    setTags([...tags, tag])
    setInput("")
  }

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag))
  }

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-1.5 border rounded-md px-2 py-1 min-h-[36px] focus-within:ring-2 focus-within:ring-blue-500 items-center">

        {tags.map((tag) => (
          <Badge
            key={tag}
            className="flex items-center gap-1 h-5 px-2 text-xs bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 animate-in fade-in zoom-in-95"
          >
            {tag}
            <X
              className="w-3 h-3 cursor-pointer hover:opacity-80"
              onClick={() => removeTag(tag)}
            />
          </Badge>
        ))}

        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              addTag(input)
            }
          }}
          placeholder="e.g. React, Node.js, MongoDB"
          className="border-0 shadow-none focus-visible:ring-0 flex-1 min-w-[100px] h-4 text-sm px-1"
        />
      </div>

      {focused && filtered.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-white shadow-md animate-in fade-in-0 zoom-in-95">
          <Command>
            <CommandGroup className="max-h-40 overflow-auto">
              {filtered.map((item) => (
                <CommandItem
                  key={item}
                  onSelect={() => addTag(item)}
                >
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </div>
      )}
    </div>
  )
}

export default TagInput