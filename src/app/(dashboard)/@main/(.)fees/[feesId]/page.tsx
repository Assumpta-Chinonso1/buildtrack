"use client";

import { useRouter } from "next/navigation";

type Props = {
  params: {
    feesId: string;
  };
};

export default function FeesSidebarPage({ params }: Props) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h1 className="text-xl font-bold mb-2">
          Fees Sidebar for ID: {params.feesId}
        </h1>

        <p className="mb-4">
          This is the sidebar content for fees with ID {params.feesId}.
        </p>

   
        <button
          onClick={() => router.replace("/fees")}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Open Full Page
        </button>
      </div>
    </div>
  );
}
