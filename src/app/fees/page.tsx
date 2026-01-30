type Props = {
  params: Promise<{
    feesId: string;
  }>;
};

export default async function FeesFullPage({ params }: Props) {
  const { feesId } = await params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Fees Full Page – ID: {feesId}
      </h1>

      <p>
        This is the FULL PAGE view for fees {feesId}.
      </p>
    </div>
  );
}
