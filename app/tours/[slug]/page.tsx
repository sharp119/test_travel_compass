export default function TourDetailPage({ params }: { params: { slug: string } }) {
  return <div>Tour: {params.slug}</div>;
}
