"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CVDownloadButton() {
  const handleDownload = () => {
    // Open the Google Drive link in a new tab
    window.open("https://drive.google.com/file/d/1--_sk-XyEI0o-pmTvEN0gCHOTGg53qBT/view?usp=sharing", "_blank")
  }

  return (
    <Button className="flex items-center gap-2" variant="outline" onClick={handleDownload}>
      <Download className="h-4 w-4" />
      <span>Download CV</span>
    </Button>
  )
}
