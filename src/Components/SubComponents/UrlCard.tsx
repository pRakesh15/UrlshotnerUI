"use client"

import { useState } from "react"
import { ExternalLink, Calendar, BarChart3 } from "lucide-react"
import { Button } from "../ui/button"
import PersonalAnalysisModal from "./PersonalAnalysisModal"

interface UrlCardProps {
  id: number
  originalUrl: string
  sortUrl: string
  clickCount: number
  createdDate: string
  username: string
}


export default function UrlCard({
  id = 5,
  originalUrl,
  sortUrl,
  clickCount,
  createdDate,
}: UrlCardProps) {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)
  const [shortUrl, setShortUrl] = useState("");

  const baseUrl = "url.localhost:5173"
  const fullShortUrl = sortUrl ? `${baseUrl}/${sortUrl}` : "No URL Available";

  const copyToClipboard = () => {
    if (!sortUrl) return;
    navigator.clipboard.writeText(fullShortUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => console.error("Failed to copy:", err));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }
  //create a onclick function for open the urlAnalysis modal ..

  const handelOpenModal = () => {
    setShortUrl(sortUrl);
    setOpen(true)
  }

  return (
    <div className="w-full bg-slate-300 rounded-md p-4 m-4 ">
      <div className="flex flex-col space-y-2">
        <div>#{id ?? "N/A"}</div>
        <div className="flex items-center">
          <h3 className="text-blue-600 font-medium">{fullShortUrl}</h3>
          <ExternalLink className="h-4 w-4 ml-2 text-blue-600" />
        </div>
        <div className="text-gray-600">{originalUrl}</div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-4">
            <div className="flex items-center text-gray-600">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 mr-1 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>{clickCount} Click</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(createdDate)}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              onClick={copyToClipboard}
              className={`${copied ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-800"
                } text-white px-4 py-2 rounded-md flex items-center transition-colors duration-200 cursor-pointer`}
            >
              {copied ? "Copied!" : "Copy"}
              {copied ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </Button>

            {/* when we click on this button we can pass the short url's  */}
            <Button
              onClick={handelOpenModal}
              className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md flex items-center cursor-pointer">
              Analytics
              <BarChart3 className="h-4 w-4 ml-1" />
            </Button>
            <PersonalAnalysisModal open={open} setOpen={setOpen} shortUrl={shortUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}

