export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  return <div>Destination: {params.slug}</div>;
}
