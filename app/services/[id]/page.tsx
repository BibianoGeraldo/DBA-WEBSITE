import { redirect } from 'next/navigation';

export default function ServiceDetailRedirect({ params }: { params: { id: string } }) {
  redirect(`/pt/services/${params.id}`);
}
