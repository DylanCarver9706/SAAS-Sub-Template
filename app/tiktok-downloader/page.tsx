import { TikTokDownloader } from "@/components/tiktokDownloader";

export default function TikTokDownloaderPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-white to-gray-100">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          TikTok Video Downloader
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Download TikTok videos easily and quickly. Just paste the video URL
          and get your video in seconds.
        </p>
        <TikTokDownloader />
      </div>
    </main>
  );
}
